<?php

Class Helper
{
	/**
	 * Checks if the passed variable is empty, only for Objects and Arrays
	 * @param  Object|Array  $var The value to check the contents
	 * @return boolean            Whether the value is empty
	 */
	public static function isEmpty($var)
	{
		if(is_object($var))
		{
			return count(get_object_vars($var)) == 0;
		}

		if(is_array($var))
		{
			return count($var) == 0;
		}

		return null;
	}
}