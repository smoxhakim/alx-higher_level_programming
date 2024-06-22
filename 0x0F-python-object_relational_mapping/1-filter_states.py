#!/usr/bin/python3

"""Get all states starting with 'N' and display them."""

if __name__ == "__main__":
    import MySQLdb
    from sys import argv

    db = MySQLdb.connect(host="localhost",
                         user=argv[1],
                         passwd=argv[2],
                         db=argv[3])
    cursor = db.cursor()

    cursor.execute(
        "SELECT * FROM states ORDER BY id ASC;"
        )
    result = cursor.fetchall()

    for char in result:
        if char[1][0] == 'N':
            print(char)

    cursor.close()
    db.close()
