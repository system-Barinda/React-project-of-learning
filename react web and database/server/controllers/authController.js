import db from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async(req,res) => {
    const {username,email,password} = req.body;
    const hashedPassword = await bcrypt.hash(password,10);
    const sql = "INSERT INTO users (username,email,password)value(?,?,?)";

    db.query(sql,[username,email,hashedPassword],(error) => {
        if(error) return res.status(500).json(error);
        res.json("user registered");
    });
};
