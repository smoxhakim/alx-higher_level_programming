#!/bin/bash
#displays the size of the body of the response

url="$1"
size=$(curl -s -o /dev/null -w "%{size_download}" "$url")
echo "$size"