import express from 'express'
import {requireLogin} from "../middleware/middleware.js"
import { loginUser, regUser} from "../controllers/authController.js"

const router  =  express.Router()

router.post("/register", regUser)
router.post("/login", loginUser)
router.get("/dashboard", requireLogin, (req,res) => {
    res.status(200).send({ok: true})
})

export default router
 

