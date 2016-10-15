<?php

Class FileHandler
{
	private $directory;
	private $hash;

	public $savedPath = "";

	private $extensions = [
		"image/jpeg" => "jpeg"
	];

	public function __construct(Array $options = [])
	{
		foreach ($options as $key => $value)
		{
			$this->$key = $value;
		}

		if(!isset($options["hash"]))
		{
			$this->hash = md5(getdate()[0]);
		}
	}

	public function hasRequestFiles()
	{
		return count($_FILES) > 0;
	}

	public function getFileExtension(String $mime = "")
	{
		$extension = "";

		if(isset($this->extensions[$mime]))
		{
			$extension = $this->extensions[$mime];
		}

		return $extension;
	}

	public function saveFile(String $field)
	{
		if(!isset($_FILES[$field]))
		{
			throw new Exception("$field field is not set in the form");
		}

		$_file = $_FILES[$field];
	
		$file = $this->setExtension($this->hash, $this->getFileExtension($_file["type"]));

		$target = $this->joinPaths($this->directory, $file);

		if(move_uploaded_file($_file["tmp_name"], $target))
		{
			$this->savedPath = $target;

			return true;
		}

		return false;
	}

	public function setExtension(String $file, String $extension = "FILE")
	{
		$info = new SplFileInfo($file);

		$ext = $info->getExtension();

		if(strpos($file, "." . $ext))
		{
			return str_replace("." . $ext, "." . $extension, $file);
		}

		else
		{
			return $file . "." . $extension;
		}
	}

	private function joinPaths(String $pre, String $post): String
	{
		if(substr($pre, -1) == "/")
		{
			$pre = substr($pre, 0, strlen($pre) -1);
		}

		if(substr($post, 0, 1) == "/")
		{
			$post = substr($post, 1, strlen($post) -1);
		}

		return $pre . "/" . $post;
	}
}