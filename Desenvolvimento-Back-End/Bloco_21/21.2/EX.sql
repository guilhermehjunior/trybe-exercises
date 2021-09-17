USE Pixar;

-- 1

SELECT m.title, b.domestic_sales, b.international_sales
FROM Movies AS m
INNER JOIN BoxOffice AS b
ON m.id = b.movie_id;

-- SELECT 
-- 	title,
-- 	(SELECT domestic_sales FROM BoxOffice
--     WHERE m.id = movie_id) AS `Domestic sales`,
--     (SELECT international_sales FROM BoxOffice
--     WHERE m.id = movie_id) AS `International Sales`
-- FROM Movies AS m;

-- 2

SELECT m.title, b.domestic_sales, b.international_sales
FROM Movies AS m
INNER JOIN BoxOffice AS b
ON m.id = b.movie_id
WHERE b.domestic_sales < b.international_sales;

-- 3

