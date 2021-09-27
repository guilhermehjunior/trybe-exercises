USE sakila;
DELIMITER $$

CREATE PROCEDURE MostraQuantidadeDeFilmesDoAtor()
BEGIN 
	SELECT actor_id, COUNT(film_id) AS `Quantidade de Filmes` FROM film_actor
    GROUP BY actor_id
    ORDER BY `Quantidade de Filmes` DESC
    LIMIT 10;
END $$

DELIMITER ;

SELECT * FROM film;

USE sakila;
DELIMITER $$

CREATE PROCEDURE ExibeDadosDoFilmeDeAcordoComCategoria(IN categoria VARCHAR(50))
BEGIN 
	SELECT f.film_id, f.title, c.category_id, c.`name` FROM film_category AS fc
    INNER JOIN film AS f
    ON f.film_id = fc.film_id
    INNER JOIN category AS c
    ON c.category_id = fc.category_id
    WHERE c.`name` = categoria;
END $$

DELIMITER ;

USE sakila;
DELIMITER $$

CREATE PROCEDURE VerificaSeClienteAtivoPeloEmail(IN email_cliente VARCHAR(200), OUT activeStatus VARCHAR(50))
BEGIN
	SELECT IF (`active` IS TRUE, 'O cliente esta ativo', 'O cliente nao esta ativo')
    FROM customer
    WHERE email = email_cliente 
    INTO activeStatus;
END $$

DELIMITER ;