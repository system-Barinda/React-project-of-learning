import mysql from "mysql2";

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"auth_app"
});

db.connect((err) => {
    if(err) console.log(err.message);
    else console.log("mysql connected well");
})
export default db;