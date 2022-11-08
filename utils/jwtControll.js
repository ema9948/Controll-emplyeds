import jwt from "jsonwebtoken"

export const jwtGen = (uid, res) => {
    const shh = process.env.JWT_SECRET
    const expiresIn = 60 * 60 * 24 * 10;
    try {
        const token = jwt.sign({ uid }, process.env.JWT_SECRET, { expiresIn });
        return { token, expiresIn }
    } catch (error) {
        return res.status(401).json({ "error": error?.message });
    }

}

