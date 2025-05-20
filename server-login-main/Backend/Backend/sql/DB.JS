const sqlite =require('sqlite3')

let db = new sqlite.Database('./database.db')

db.run(`CREATE TABLE IF NOT EXISTS USER(
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     USERNAME VARCHAR(10) NOT NULL,
     PASSWORD VARCHAR(10) NOT NULL,
     )`
    )


db.run (`INSERT INTO usuarios (username, password) VALUES  
    (?, ?)`, [username, hashedPassword])