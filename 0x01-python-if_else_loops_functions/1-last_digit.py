#!/usr/bin/python3

import random
number = random.randint(-10000, 10000)

last_num = abs(number) % 10

if last_num < 6 and last_num != 0:
    print("Last digit of "+str(number)+" is "+str(last_num)+" and is less than 6 and not 0")
elif last_num > 5:
    print("Last digit of "+str(number)+" is "+str(last_num)+" and is greater than 5")
else:
    print("Last digit of "+str(number)+" is "+str(last_num)+" and is 0")
