<?php

require_once "database.php";

Class ActiveRecord
{
	protected $data = [];

	protected $error = [];

	/**
	 * Construct model with data instance
	 * @param Array $data The form data from request
	 */
	public function __construct($data = null)
	{
		if($data)
		{
			$this->setData($data);
		}
	}

	/**
	 * Model static instance for static access
	 * @param  String $className The name of the model to instantiate
	 * @return Object            The instance of the model stored in static variable
	 */
	public static function model($className = __CLASS__)
	{
		return new $className();
	}

	/**
	 * Checks if there is an specific error stored in errors list
	 * @param  String  $attribute The name of the attribute form
	 * @return Boolean            Whether the attribute has an error
	 */
	public function hasError($attribute = "")
	{
		return isset($this->error[$attribute]);
	}

	/**
	 * Checks if there is any error stored in errors list
	 * @return Boolean Whether there is an error set
	 */
	public function hasErrors()
	{
		return count($this->error) > 0;
	}

	/**
	 * Sets an error in errors list
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
	 * Gets the whole list of errors
	 * @return Array Array-Object with all stored errors
	 */
	public function getErrors()
	{
		return $this->error;
	}

	/**
	 * Stores data form for the instance, used for validation and saving into database
	 * @param Array $form Array-Object form data
	 */
	public function setData($form)
	{
		if(!isset($form))
		{
			throw new Error("Form parameter is required.");
		}

		else
		{
			$this->data = $form;
		}
	}

	/**
	 * Gets all list of all attributes from the model class
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
	 * @return Array The data store in the model instance
	 */
	public function getData()
	{
		return $this->data;
	}

	/**
	 * Fetches a list of records from the database
	 * @param  Array  $filter The filter to pass into SQL
	 * @return Array          All the rows found within the filter
	 */
	public function findAll($filter = [])
	{
		global $database;

		return $database->select($this->tableName(), "*", $filter);
	}

	/**
	 * Fetches a single record from the database with a given Id
	 * @param  Integer $id The id of the record
	 * @return Array       The array record found in database
	 */
	public function findById($id)
	{
		if(!isset($id))
		{
			throw new Error("$id is undefined");
		}

		global $database;

		return $database->select($this->tableName(), "*", [
			"id" => $id
		]);
	}

	/**
	 * Validates the whole data set in the instance with the rules from the model
	 * @return Boolean Whether the validation passes
	 */
	public function validate()
	{
		$rules = $this->rules();

		$data = [];

		foreach ($rules as $key => $value)
		{
			if(isset($value["required"]) && $value["required"] == true)
			{
				$is_valid = isset($this->data[$key]);
				$data[$key] = $is_valid;

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
	 * @return Array|Null The data stored from the database, null if validation failes
	 */
	public function save()
	{
		if($this->validate())
		{
			global $database;

			$id = $database->insert($this->tableName(), $this->data);

			return $this->findById($id);
		}

		else
		{
			return null;
		}
	}
}