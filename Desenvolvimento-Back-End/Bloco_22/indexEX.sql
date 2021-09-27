USE sakila;

-- 1
CREATE FULLTEXT INDEX index_name ON category(`name`);

SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');

DROP INDEX index_name ON category;

SELECT * FROM sakila.category
WHERE `name` LIKE '%action%';

-- 2

CREATE INDEX postal_code_index ON address(postal_code);

SELECT * FROM address
WHERE postal_code = '36693';

DROP INDEX postal_code_index ON address;

SELECT * FROM address
WHERE postal_code = '36693';
