#!/usr/bin/python3

import random
number = random.randint(-10000, 10000)

last_num = abs(number) % 10


if number < 6 and last_num != 0:
    print(f"Last digit of {number} is -{last_num} and is less than 6 and not 0")
elif number > 5:
    print(f"Last digit of {number} is {last_num} and is greater than 5")
else:
    print(f"Last digit of {number} is {last_num} and is 0")
