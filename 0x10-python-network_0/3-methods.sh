#!/bin/bash
#a Bash script that takes in a URL and displays all HTTP methods the server will accept.
curl -s -I ALLOW "$1" -L | grep "Allow" | awk '{print $2}'
