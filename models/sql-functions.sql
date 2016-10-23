/*
 * Get mas tree length function MYSQL
 */
CREATE FUNCTION get_tree_max_length (parent INT)
	RETURNS INT DETERMINISTIC
	RETURN (
		SELECT MAX(length) FROM bill_has_bill WHERE ancestor = parent
	);

/*
 * Odd parent function MYSQL
 */
CREATE FUNCTION find_odd_parent (parent INT)
	RETURNS INT DETERMINISTIC 
	RETURN (
		SELECT ancestor FROM bill_has_bill WHERE length = 1 AND descendant in (
			SELECT descendant FROM bill_has_bill WHERE ancestor = parent AND length = (
				SELECT get_tree_max_length(parent)
			) 
		) GROUP BY ancestor HAVING count(ancestor) = 1);

/*
 * Leaves count function MYSQL
 */
CREATE FUNCTION get_leaves_count (parent INT)
	RETURNS INT DETERMINISTIC
	RETURN (select count(*) from bill_has_bill where ancestor = parent and length = (
		select get_tree_max_length(parent)
	));

/*
 * Select new parent function MYSQL
 */
CREATE FUNCTION get_new_parent ()
	RETURNS INT
	RETURN (
		select MIN(descendant) from bill_has_bill where ancestor = 1 and length = (
			select get_tree_max_length(1) 
		)
	);

/*
 * Select new parent from current level function MYSQL
 */
CREATE FUNCTION get_new_parent_level ()
	RETURNS INT
	RETURN (
		SELECT MIN(descendant) FROM bill_has_bill WHERE length = (
			SELECT get_tree_max_length(1) - 1
		) AND ancestor = 1 AND descendant NOT IN (
			SELECT ancestor FROM bill_has_bill WHERE descendant IN (
				SELECT descendant FROM bill_has_bill WHERE length = (
					SELECT get_tree_max_length(1)
				)
			)
		AND length = 1 GROUP BY ancestor)
	);

/*
 * Insert node function MYSQL
 */
delimiter //
CREATE PROCEDURE insert_node (IN node INT, IN parent INT)
	BEGIN 
		INSERT INTO bill_has_bill(ancestor, descendant, length) SELECT ancestor, node descendant, (length + 1) length FROM bill_has_bill WHERE descendant = parent UNION ALL SELECT node, node, 0; 
	END//
delimiter;