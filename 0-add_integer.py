#!/usr/bin/python3
def add_integer(a, b=98):
    if not isinstance(a, (int, float)):
        raise TypeError("a must be an anteger")
    if not isinstance(b, (int, float)):
        raise TypeError("b must be an anteger")
    if isinstance(a, float):
        a = int(a)
    if isinstance(b, int):
        b = int(b)
    
    return int(a + b)
    
