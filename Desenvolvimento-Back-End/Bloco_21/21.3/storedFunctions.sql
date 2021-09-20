USE sakila;
DELIMITER $$

CREATE FUNCTION RetornaTotaldePagamentoPorId(id INT)
RETURNS DOUBLE READS SQL DATA
BEGIN
	DECLARE total DOUBLE;
    SELECT SUM(amount)
    FROM payment
    WHERE customer_id = id
    INTO total;
    RETURN total;
END $$

DELIMITER ;

USE sakila;
DELIMITER $$

CREATE FUNCTION RetornaNomeDoFilmeVinculadoAoIdDeInventario(id INT)
RETURNS VARCHAR(50) READS SQL DATA
BEGIN
	DECLARE movie VARCHAR(50);
    SELECT title FROM film
    WHERE film_id = (
		SELECT film_id FROM inventory
        WHERE inventory_id = id
	) INTO movie;
    RETURN movie;
END $$

DELIMITER ;

USE sakila
DELIMITER $$

CREATE FUNCTION RetornaQuantidadeDeFilmesPorCategoria(categoria VARCHAR(50))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE total_filmes INT;
	SELECT COUNT(*) FROM film_category fc
    INNER JOIN category c
    ON fc.category_id = c.category_id
    WHERE c.`name` = categoria
    INTO total_filmes;
    RETURN total_filmes;
END $$

DELIMITER ;