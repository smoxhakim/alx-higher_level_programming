#!/usr/bin/python3

import random
number = random.randint(-10000, 10000)

last_n = abs(number) % 10


if number < 6 and last_n != 0:
    print(f"Last digit of {number} is -{last_n} and is less than 6 and not 0")
elif number > 5:
    print(f"Last digit of {number} is {last_n} and is greater than 5")
else:
    print(f"Last digit of {number} is {last_n} and is 0")
