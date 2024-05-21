--  script that displays the average temperature

SELECT c.city, ROUND(AVG(t.value * 1.8 + 32), 2) AS avg_temp_fahrenheit
FROM temperatures t
JOIN cities c ON t.city_id = c.city_id
GROUP BY c.city
ORDER BY avg_temp_fahrenheit DESC;
