#!/usr/bin/python3
"""my github"""

import sys
import requests
from requests.auth import HTTPBasicAuth

if __name__ == "__main__":
    username = sys.argv[1]
    password = sys.argv[2]

    auth = HTTPBasicAuth(username, password)
    request = requests.get('https://api.github.com/user', auth=auth)
    my_id = request.json().get('id')
    print(my_id)
