#!/usr/bin/python3
"""displays the value of the X-Request-Id variable"""
import urllib.request
import sys


with urllib.request.urlopen(sys.argv[1]) as response:
    ids = response.headers
    x_id = ids.get('X-Request-Id')
    print(x_id)
