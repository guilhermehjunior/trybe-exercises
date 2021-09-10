SELECT "This is SQL Exercise, Practice and Solution";
SELECT 1,2,3;
SELECT '1' AS um, '2' AS dois, '3' AS tres;
SELECT 10+5;
SELECT 10*3+5/5;

USE Scientists;

SELECT * FROM Scientists;

SELECT CONCAT('O Projeto ', Name, ' precisou de ', Hours, ' para ser concluido.') FROM Projects;

SELECT Name AS 'Nome do Projeto', Hours AS 'Horas de Trabalho' FROM Projects;

SELECT Name FROM Scientists
ORDER BY Name;

SELECT Name FROM Projects
ORDER BY Name DESC;

SELECT Name, Hours FROM Projects
ORDER BY Hours DESC LIMIT 3;

SELECT DISTINCT Project FROM AssignedTo;

SELECT Name FROM Projects
ORDER BY Hours DESC LIMIT 1;

SELECT Name FROM Projects
ORDER BY Hours ASC LIMIT 1 OFFSET 1;

SELECT * FROM Projects
ORDER BY Hours Limit 5;

SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists.') AS resultado FROM Scientists;
