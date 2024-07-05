#!/usr/bin/python3
"""requests module"""

import requests

if __name__ == "__main__":
    url = "https://alx-intranet.hbtn.io/status"

    res = requests.get(url)
    body = res.text

    print("Body response:")
    print(f"\t- type: {type(body)}")
    print(f"\t- content: {body}")
