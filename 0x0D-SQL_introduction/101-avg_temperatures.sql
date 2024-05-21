--  script that displays the average temperature


SELECT 
    city, 
    AVG(value) AS avg_temp 
FROM 
    temperatures
WHERE
    value IS NOT NULL 
GROUP BY 
    city 
ORDER BY 
    avg_temp DESC;
