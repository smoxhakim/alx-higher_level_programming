#!/usr/bin/python3

"""X-Request-Id"""
import requests
import sys


if __name__ == "__main__":
    url = sys.argv[1]

    req = requests.get(url)
    res_id = req.headers.get('X-Request-Id')

    print(res_id)
