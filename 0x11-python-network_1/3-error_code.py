#!/usr/bin/python3
"""manage urllib.error.HTTPError"""
import urllib.request
import urllib.error
import sys

if __name__ == "__main__":
    url = sys.argv[1]

    try:
        with urllib.request.urlopen(url) as response:
            req = response.read().decode('utf-8')
            print(req)
    except urllib.error.HTTPError as e:
        print(f"Error code: {e.code}")
