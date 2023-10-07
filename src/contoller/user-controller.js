import express from 'express';
import Router from "express-promise-router";
import { UserService } from '../services/user-sevice.js';
import { User, mongoQuery } from '../db_config/index.js';
import { getData } from '../db_config/dbHelper.js';
// import User from '../models/user.js';

const router = new Router();

const userService = new UserService();

router.get("/healthCheck", async (req, res) => {
    try {
        if (userService.healthCheck()) res.status(200).send({ status: "OK", message: "Healthy" })
    } catch (error) {
        res.status(400).send({ status: "NO", message: "go to the Devops" })
    }
})

router.post("/signUp", async (req, res) => {
    try {
        const existingUser = await getData(User, "email", "==", req.body.email)
        if (existingUser.data.length) {
            res.status(400).send({ status: "OK", message: "User already Exists" })
            return
        }
        const response = await User.add(req.body)
        const userData = await response.get()
        res.status(200).send({ status: "OK", message: "Signedup Successfully", data: { id: userData.id, ...userData.data() } })
    } catch (error) {
        console.log(error);
        res.status(400).send({ status: "NO", message: "go to the Devops" })
    }
})

router.post("/login", async (req, res) => {
    try {
        const existingUser = await getData(User, "email", "==", req.body.email)
        if (existingUser?.data.length) {
            if (existingUser.data[0].password === req.body.password) {
                return res.status(200).send({ status: "OK", message: "Signedin Successfully", data: existingUser.data[0] })
            } else {
                return res.status(400).send({ status: "NO", message: "wrong Password" })
            }
        } else {
            return res.status(400).send({ status: "NO", message: "User Doesn't Exists" })
        }
    } catch (error) {
        res.status(400).send({ status: "NO", message: "go to the Devops" })
    }
})

router.post("/deleteUser", async (req, res) => {
    try {
        await User.deleteMany({ name: { $in: [undefined, null] } });
        res.status(200).send({ status: "OK", message: "Deleted SuccessFully" })
    } catch (error) {
        res.status(400).send({ status: "NO", message: "go to the Devops" })
    }
})

router.post("/findUser", async (req, res) => {
    try {
        const user = JSON.parse(req.headers.user)
        const useDetails = await getData(User)
        if (useDetails.message==="DONE") {
            res.status(200).send({ status: "OK", message: "Data fetched successfully", data: useDetails.data })
            return
        }
        res.status(200).send({ status: "OK", message: "Data fetched successfully", data: [] })
    } catch (error) {
        res.status(400).send({ status: "NO", message: "go to the Devops" })
    }
})


export default router;