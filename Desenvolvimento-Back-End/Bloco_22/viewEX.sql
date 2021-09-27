USE sakila;

SELECT * FROM category;
SELECT * FROM film;
SELECT * FROM film_category;

-- EXs de  VIEW
-- 1
DROP VIEW film_with_categories;

CREATE VIEW film_with_categories AS
	SELECT f.title, c.category_id, c.`name`
    FROM film_category AS fc
    INNER JOIN category AS c
    ON c.category_id = fc.category_id
    INNER JOIN film AS f
    ON f.film_id = fc.film_id
    ORDER BY f.title;
    
SELECT * FROM film_with_categories;

-- 2
SELECT * FROM film;
SELECT * FROM actor;
SELECT * FROM film_actor;


CREATE VIEW film_info AS 
	SELECT a.actor_id, CONCAT(a.first_name, ' ', a.last_name) AS actor, f.title
    FROM film_actor AS fa
    INNER JOIN film AS f
    ON f.film_id = fa.film_id
    INNER JOIN actor AS a
    ON a.actor_id = fa.actor_id
    ORDER BY actor;
    
SELECT * FROM film_info;

-- 3
SELECT * FROM city;
SELECT * FROM address;

DROP VIEW address_info;

CREATE VIEW address_info AS
	SELECT 
		address_id,
		address,
        district,
        (SELECT city_id FROM city WHERE a.city_id = city_id) AS city_id,
        (SELECT city FROM city WHERE a.city_id = city_id) AS city
	FROM address AS a
    ORDER BY city;
    
SELECT * FROM address_info;

-- 4

SELECT * FROM `language`;

CREATE VIEW movies_languages AS
 SELECT f.title, l.language_id, l.`name` AS `language` FROM film AS f
 INNER JOIN `language` AS l
 ON f.language_id = l.language_id
 ORDER BY f.title;
 
SELECT * FROM movies_languages;