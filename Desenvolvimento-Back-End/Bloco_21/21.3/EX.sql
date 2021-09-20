-- 1
USE BeeMovies;

DROP TRIGGER IF EXISTS onMoviesInsert;

DELIMITER $$
SELECT * FROM movies_logs;

CREATE TRIGGER onMoviesInsert
	BEFORE INSERT ON movies
	FOR EACH ROW
BEGIN
	SET NEW.release_year = YEAR(NOW());
END$$

CREATE TRIGGER onMoviesInsert2
	AFTER INSERT ON movies
	FOR EACH ROW
BEGIN
	INSERT INTO movies_logs(movie_id, executed_action, log_date)
    VALUES
		(NEW.movie_id, 'INSERT', NOW());
END$$

DELIMITER ;

INSERT INTO movies(ticket_price, ticket_price_estimation)
VALUE
	(4.99, 'teste');
    
-- 2

USE BeeMovies;
DELIMITER $$

CREATE TRIGGER onMoviesUpdate
	BEFORE UPDATE ON movies
	FOR EACH ROW
BEGIN
	SET NEW.ticket_price_estimation = 
		IF (OLD.ticket_price > NEW.ticket_price, 'Decreasing', 'Increasing');
END $$

CREATE TRIGGER onMoviesUpdate2
	AFTER UPDATE ON movies
	FOR EACH ROW
BEGIN
	INSERT INTO movies_logs(movie_id, executed_action, log_date)
    VALUES
		(NEW.movie_id, 'UPDATING', NOW());
END$$

DELIMITER ;

UPDATE movies
SET ticket_price = 6.99
WHERE movie_id = 1;

-- 3
USE BeeMovies;

DELIMITER $$

CREATE TRIGGER onMoviesDelete
	AFTER DELETE ON movies
	FOR EACH ROW
BEGIN
	INSERT INTO movies_logs(movie_id, executed_action, log_date)
    VALUES
		(OLD.movie_id, 'DELETING', NOW());
END $$
	
DELIMITER ;

SELECT * FROM movies_logs;

DELETE FROM movies
WHERE movie_id = 2;

