<?php

require_once "database.php";
require_once "lib/Helper.php";

Class ActiveRecord
{
	private $new = true;
	private $data = [];
	private $error = [];
	private $_scopes = [];
	private $className;
	private $_database;


	/**
	 * Construct model with data instance
	 * 
	 * @param Array $data The form data from request
	 */
	public function __construct($data = null, $className = null)
	{
		global $database;

		$this->_database = $database;

		$this->className = $className;

		if($data)
		{
			$this->setData($data);
		}
	
		// Set the scopes instance if Model Class has scope function
		if(method_exists($this, "scopes"))
		{
			$this->setScopes($this->scopes());
		}
	}

	/**
	 * Model static instance for static access
	 * 
	 * @param  String $className The name of the model to instantiate
	 * @return Object            The instance of the model stored in static variable
	 */
	public static function model($className = __CLASS__)
	{
		return new $className(null, $className);
	}

	/**
	 * Checks if the current instance is a new Record, should return false when data is gathered from Database
	 * 
	 * @return boolean Whether the instance is new
	 */
	public function isNewRecord()
	{
		return $this->new;
	}

	/**
	 * Checks if there is an specific error stored in errors list
	 * 
	 * @param  String  $attribute The name of the attribute form
	 * @return Boolean            Whether the attribute has an error
	 */
	public function hasError($attribute = "")
	{
		return isset($this->error[$attribute]);
	}

	/**
	 * Checks if there is a defined attribute in Model Class
	 * 
	 * @param  String  $attribute The name of the attribute in Model Class
	 * @return boolean            Whether the attribute is defined in Model Class
	 */
	public function hasAttribute($attribute)
	{
		return in_array($attribute, $this->getAttributes());
	}

	/**
	 * Checks if there is any error stored in errors list
	 * 
	 * @return Boolean Whether there is an error set
	 */
	public function hasErrors()
	{
		return count($this->error) > 0;
	}

	/**
	 * Checks if there is any scope name as specified
	 * 
	 * @param  String  $scope The name of the scope
	 * @return boolean        Whether the scope is defined
	 */
	public function hasScope(String $scope)
	{
		$found = false;

		foreach ($this->_scopes as $key => $value) {
			if($key == $scope)
			{
				$found = true;

				break;
			}
		}

		return $found;
	}

	/**
	 * Sets an error in errors list
	 * 
	 * @param String $attribute The name of the attribute that has an error
	 * @param String $message   The error description, inherited from model if arguement is missing
	 */
	public function setError($attribute, $message = null)
	{
		$rules = $this->rules();


		if(isset($rules[$attribute]))
		{
			if(!$message && !isset($rules[$attribute]["message"]))
			{
				throw new Error("Error message for \"" . $attribute . "\" is undefined.");
			}

			$this->error[$attribute] = [
				"message" => $message ? $message : $rules[$attribute]["message"]
			];
		}

		else
		{
			$this->error[$attribute] = $message;
		}
	}

	/**
	 * Sets scope value for the instance
	 * 
	 * @param String       $name  The name of the scope
	 * @param Array|Object $value The values to set into the scope
	 */
	public function setScope(String $name, $value)
	{
		if(is_object($value))
		{
			$this->_scopes[$name] = (Array) $value;
		}

		if(is_array($value))
		{
			$this->_scopes[$name] = $value;
		}
	}

	/**
	 * Sets scopes for the instance
	 * 
	 * @param Array|Object $scopes The list of all scopes with their value
	 */
	public function setScopes($scopes)
	{
		if(is_object($scopes))
		{
			if(!isset($scopes->default))
			{
				$scopes->default = $this->getAttributes();
			}

			$this->_scopes = (Array) $scopes;
		}

		if(is_array($scopes))
		{
			if(!isset($scopes["default"]))
			{
				$scopes["default"] = $this->getAttributes();
			}

			$this->_scopes = $scopes;
		}
	}

	/**
	 * Gets the whole list of errors
	 * 
	 * @return Array Array-Object with all stored errors
	 */
	public function getErrors()
	{
		return $this->error;
	}

	public function getQueryLogs()
	{
		return [
			"log" => $this->_database->log(),
			"error" => $this->_database->error()
		];
	}

	/**
	 * Stores data form for the instance, used for validation and saving into database
	 * 
	 * @param Array    $form  Array-Object form data
	 * @param Boolean  $force Whether force overwriting to the instance
	 */
	public function setData($form, $force = false)
	{
		if(!isset($form))
		{
			throw new Error("Form parameter is required.");
		}

		else
		{
			if(!$force)
			{
				// Remove id
				if(isset($form->id))
				{
					unset($form->id);
				}

				// Remove create_at timestamp
				if(isset($form->create_at))
				{
					unset($form->create_at);
				}

				// Remove update_at timestamp
				if(isset($form->update_at))
				{
					unset($form->update_at);
				}
			}

			else
			{
				$form->id = intval($form->id);
			}

			foreach ($form as $key => $value) {
				$this->$key = $value;
			}
		}
	}

	/**
	 * Gets all list of all attributes from the model class
	 * 
	 * @return Array A list of all attributes
	 */
	public function getAttributes()
	{
		if(!isset($this->attributes))
		{
			throw new Error("Attributes are not set");
		}

		else
		{
			return $this->attributes;
		}
	}

	/**
	 * Gets the data stored from $this->setData()
	 * 
	 * @return Array The data store in the model instance
	 */
	public function getData()
	{
		$attributes = $this->getAttributes();

		(Object) $data = [];

		foreach ($attributes as $key) {
			$data[$key] = $this->$key;
		}

		return $data;
	}

	/**
	 * Gets a list of all attributes set by the scope
	 * 
	 * @param  String $scope The name of the scope
	 * @return Array         The list of all attributes set by the scope 
	 */
	public function getScope(String $scope)
	{
		$data = [];

		if($this->hasScope($scope))
		{
			$data = $this->scopes()[$scope];
		}

		return $data;
	}

	/**
	 * Fetches a list of records from the database
	 * 
	 * @param  Array  $filter The filter to pass into SQL
	 * @return Array          All the rows found within the filter
	 */
	public function findAll($filter = [], $scope = "default")
	{

		return $this->_database->select($this->tableName(), "*", $filter);
	}

	/**
	 * Fetches all records that matches with the attribute criteria
	 * 
	 * @param  Array        $attributes The criteria to use in database
	 * @return Array|Object             The result of the criteria search
	 */
	public function findByAttributes($attributes = [])
	{
		// Turn array attributes into object stdObject
		$attributes = (Object) $attributes;

		$attr = [];

		foreach ($attributes as $key => $value)
		{
			if($this->hasAttribute($key))
			{
				$attr[$key] = $value;
			}
		}

		$data = $this->_database->select($this->tableName(), "*", $attr);

		if(count($data) <= 1)
		{
			$data = (Object) $data;
		}

		return $data;
	}

	/**
	 * Fetches a single record from the database with a given Id
	 * 
	 * @param  Integer $id The id of the record
	 * @return Array       The array record found in database
	 */
	public function findById($id)
	{
		if(!isset($id))
		{
			throw new Error("$id is undefined");
		}

		$id = intval($id);

		$data = $this->_database->select($this->tableName(), "*", [
			"id" => $id
		]);

		// Turn Array-List into Array-Object
		if(count($data) > 0)
		{
			$data = (Object) $data[0];
		}

		else
		{
			$data = (Object) $data;
		}

		$this->new = false;
		$this->setData($data, true);

		return $this;
	}

	/**
	 * Validates the whole data set in the instance with the rules from the model
	 * 
	 * @return Boolean Whether the validation passes
	 */
	public function validate()
	{
		$rules = $this->rules();

		foreach ($rules as $key => $value)
		{
			if(isset($value["required"]) && $value["required"] == true)
			{
				$is_valid = isset($this->$key);

				if(!$is_valid)
				{
					$this->setError($key);
				}
			}
		}

		return !$this->hasErrors();
	}

	/**
	 * Saves data into database, validation is triggered first before the save
	 * 
	 * @return Array|Null The data stored from the database, null if validation failes
	 */
	public function save()
	{
		if($this->validate())
		{
			if($this->new)
			{
				$id = $this->_database->insert($this->tableName(), $this->data);

				return $this->findById($id);
			}

			else
			{
				$data = $this->getData();

				// Remove id property
				unset($data->id);

				$this->_database->update($this->tableName(), $data,[
					"id" => $this->id
				]);

				return $this->findById($this->id);
			}
		}

		else
		{
			return null;
		}
	}

	/**
	 * Deletes a record in database, the record must not be new, otherwise it throws error
	 * 
	 * @return Boolean Whether deletion was successful or not
	 * @throws Error   Throws error only if the record is new
	 */
	public function delete()
	{
		if(!$this->new)
		{
			return $this->_database->delete($this->tableName(), [
				"id" => $this->id
			]) > 0; //Turn integer into boolean as it returns only the number of affected rows
		}

		else
		{
			throw new Error("This record cannot be deleted because it's new");
		}
	}
}