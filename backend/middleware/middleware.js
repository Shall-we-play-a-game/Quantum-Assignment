import Jwt from 'jsonwebtoken'
import User from '../models/User.js'

export const requireLogin = async (req,res,next) => {
    try {
        const decode = Jwt.verify(
            req.headers.authorization,
            process.env.JWT_SECRET
        );
        req.user = decode
        next()
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}