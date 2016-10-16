<?php

Class FileHandler
{
	private $directory;
	private $hash;

	public $savedPath = "";

	private $extensions = [
		"image/jpeg" => "jpeg",
		"application/pdf" => "pdf",
		"application/vnd.openxmlformats-officedocument.wordprocessingml.document" => "docx"
	];

	/**
	 * Constructs the object with the given options
	 * 
	 * @param Array|array $options [description]
	 */
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

	/**
	 * Checks if there is a uploaded file in the server
	 * 
	 * @return boolean Whether there is a file in upload
	 */
	public function hasRequestFiles()
	{
		return count($_FILES) > 0;
	}

	/**
	 * Gets the file extension from a given mime/type
	 * 
	 * @param  String|string $mime The mime/type for checking file extension
	 * @return String              The file extension parsed from mime/type
	 */
	public function getFileExtension(String $mime = "")
	{
		$extension = "";

		if(isset($this->extensions[$mime]))
		{
			$extension = $this->extensions[$mime];
		}

		return $extension;
	}

	/**
	 * Saves the uploaded file into the server, the provided field is the field found
	 * in $_FILES
	 * 
	 * @param  String $field The name of the field containing the file
	 * @return Boolean       Whether the file was succesfully saved
	 */
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

	/**
	 * Sets extension in a file string, it replaces the extension if it already exists
	 * 
	 * @param  String        $file      The file string to set/replace extension
	 * @param  String|string $extension The extension to set in the file string
	 * @return String                   The new file string with the new extension
	 */
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

	/**
	 * Joins to paths
	 * 
	 * @param  String $pre  The first path
	 * @param  String $post The second path
	 * @return String       The new joined path
	 */
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