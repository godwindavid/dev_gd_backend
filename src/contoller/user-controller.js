import express from 'express';
import Router from "express-promise-router";
import { UserService } from '../services/user-sevice.js';
import { mongoQuery } from '../db_config/index.js';
import User from '../models/user.js';

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
        const existingUser = await User.findOne({ email: req.body.email })
        console.log("existingUser", existingUser);
        if (existingUser) {
            res.status(400).send({ status: "OK", message: "User already Exists" })
            return
        }
        const useDetails = new User(req.body)
        await useDetails.save();
        res.status(200).send({ status: "OK", message: "Signedup Successfully", data: useDetails })
    } catch (error) {
        res.status(400).send({ status: "NO", message: "go to the Devops" })
    }
})

router.post("/login", async (req, res) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email })
        if (existingUser) {
            if (existingUser.password === req.body.password) {
                return res.status(200).send({ status: "OK", message: "Signedin Successfully", data: existingUser })
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
        const useDetails = await User.find(req?.body?.name ? { name: req.body.name } : { _id: { $nin: [user?._id] } });
        console.log("user", user?._id, useDetails )

        res.status(200).send({ status: "OK", message: "Data fetched successfully", data: useDetails })
    } catch (error) {
        res.status(400).send({ status: "NO", message: "go to the Devops" })
    }
})


export default router;