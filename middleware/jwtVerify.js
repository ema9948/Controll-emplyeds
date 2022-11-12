import jwt from "jsonwebtoken";
export const jwtVerify = (req, res, next) => {
  try {
    const shh = process.env.JWT_SECRET;
    const auth = req?.headers?.authorization;
    const token = auth.split(" ")[1];
    const { uid } = jwt.verify(token, shh);
    req.uid = uid;
    next();
  } catch (error) {
    return res.status(401).json({ error: error?.message });
  }
};
