#!/usr/bin/python3
"""X-Request-Id"""
import requests
import sys


if __name__ == "__main__":
    url = sys.argv[1]

    res = requests.get(url)
    res_id = requests.headers.get('X-Request-Id')

    print(res_id)
