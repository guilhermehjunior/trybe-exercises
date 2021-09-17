USE Pixar;

-- 10
SELECT m.* FROM Movies AS m
INNER JOIN BoxOffice AS b
ON m.id = b.movie_id
WHERE EXISTS (
	SELECT *
    FROM Theater AS t
    WHERE m.theater_id = t.id
)
AND b.rating > 8;

-- 11
SELECT t1.title, t1.length_minutes, t1.director, t2.title, t2.length_minutes
FROM Movies AS t1, Movies AS t2
WHERE t1.director = t2.director;

-- 12

SELECT m.title FROM Movies AS m
WHERE m.id IN (
	SELECT movie_id
    FROM BoxOffice
    WHERE (domestic_sales + international_sales) > 500000000
)
AND length_minutes > 110;

SELECT m.title FROM Movies AS m
INNER JOIN BoxOffice AS b
ON m.id = b.movie_id
WHERE (b.domestic_sales + b.international_sales) > 500000000
AND m.length_minutes > 110;