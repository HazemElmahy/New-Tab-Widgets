import sqlite3

connection = sqlite3.connect('startup.db')

study_cursor = connection.cursor()

study_cursor.execute(
    """
    CREATE TABLE did_it (
        day INTEGER,
        did_it BOOLEAN NOT NULL CHECK(did_it IN (0, 1)),
    )
    """
)