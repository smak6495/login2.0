const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('.database.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Conectado a la base de datos SQLite.');
  }
});


db.run(`CREATE TABLE IF NOT EXISTS USER(
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     USERNAME VARCHAR(10) NOT NULL,
     NAME VARCHAR(10) NOT NULL,
     PASSWORD VARCHAR(10) NOT NULL,
     )`
    )
