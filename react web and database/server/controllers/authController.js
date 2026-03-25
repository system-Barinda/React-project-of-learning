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

export const login = async(req,res) => {
    const {email,password} = req.body;
    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql,[email,password],(error,result) => {
      if(error) return res.status(500).json(error.message);
      if(result.length === 0) return res.status(404).json("user not found");

      const user = result[0];
      const isMatch = bcrypt.compare(password,user.password);
      if(!isMatch) return res.status(400).json('wrong password');
      const token = jwt.sign({id:user.id},"secretkey",{
        expiresIn:"1h",
      });
      res.json({token});

    });
};
