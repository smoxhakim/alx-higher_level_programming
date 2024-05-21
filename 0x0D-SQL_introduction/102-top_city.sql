-- script that displays the top 3 of cities temperature during July and August ordered by temperature

SELECT
    city,
    value AS temperature,
    MONTH(date) AS month
FROM
    temperatures
WHERE
    MONTH(date) IN (7, 8)
ORDER BY
    temperature DESC
LIMIT 3;
