USE Pixar;

SELECT m.* FROM Movies AS m
INNER JOIN BoxOffice AS b
ON m.id = b.movie_id
WHERE EXISTS (
	SELECT *
    FROM Theater AS t
    WHERE m.theater_id = t.id
)
AND b.rating > 8;