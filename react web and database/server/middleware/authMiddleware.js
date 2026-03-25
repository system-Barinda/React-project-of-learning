 import jwt from "jsonwebtoken";
 const  authMiddleware = async(req,res,next) => {
  const token = req.headers.authorization;
    if(!token) {
      return res.status(401).json("access dinied. No token provided.");
    }
   

    try{
      const  decoded = jwt.verify(token,"secretkey");
      req.user = decoded;
      next();

    }
    catch(error){
      res.status(401).json("invalid token");

    }
}
export default authMiddleware;