import jwt from "jsonwebtoken"
export const jwtVerify = (req, res, next) => {
    const shh = process.env.JWT_SECRET
    const auth = req?.headers?.authorization;
    const token = auth.split(" ")[1];

    try {
        const { uid } = jwt.verify(token, shh)
        req.uid = uid
        next()
    } catch (error) {
        return res.status(401).json({ "error": error?.message });
    }
}