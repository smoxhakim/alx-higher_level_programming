#!/bin/bash
#Write a Bash script that sends a request to a URL passed as an argument, and displays only the status code of the response.
curl -s -o /tmp/status_code.txt -w "%{http_code}\n" "$1" & sleep 1
cat /tmp/status_code.txt
