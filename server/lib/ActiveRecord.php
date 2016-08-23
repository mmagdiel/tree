<?php

require_once "database.php";

Class ActiveRecord
{
	protected $data = [];

	protected $error = [];

	public function __construct($data = null)
	{
		if($data)
		{
			$this->setData($data);
		}
	}

	public static function model($className = __CLASS__)
	{
		return new $className();
	}

	public function hasError($attribute = "")
	{
		return isset($this->error[$attribute]);
	}

	public function hasErrors()
	{
		return count($this->error) > 0;
	}

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

	public function getErrors()
	{
		return $this->error;
	}

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

	public function getData()
	{
		return $this->data;
	}

	public function findAll($filter = [])
	{
		global $database;

		return $database->select($this->tableName(), "*", $filter);
	}

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