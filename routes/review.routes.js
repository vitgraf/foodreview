import express from "express";
import Review from '../models/Review.js';
import Restaurant from '../models/Restaurant.js';
import User from "../models/User.js";

const review = express.Router();

review.get('/', (req, res) => {
    res.send('Rota de Reviews');
});

review.post("/register", async (req, res) => {

    const { idUser, idRestaurant, comment, stars } = req.body;

    const alreadyExistsReview = await Review.findOne({ where: { idUser, idRestaurant } }).catch(
        (err) => {
            console.log("Error: ", err);
        }
    );

    if (alreadyExistsReview) {
        return res.status(409).json({ message: "Review already registered!" });
    }

    const newReview = new Review({ idUser, idRestaurant, comment, stars });
    const savedReview = await newReview.save().catch((err) => {
        console.log("Error: ", err);
        res.status(500).json({ error: "Sorry! Could not register the Review" });
    });

    if (savedReview) res.json({ message: "New Review Registered!" });
});

review.get('/findByRestaurant', async (req, res) => {
    const idRestaurant = req.query.idRestaurant;
    const reviews = await Review.findAll({
        where: {
            idRestaurant: idRestaurant
        },
        include: [{model: User}]
    }).catch(
        (err) => {
            console.log(err)
        }
    );

    if (reviews) {
        return res.json({ reviews })
    } else {
        return null
    }
})

review.get('/findByUser', async (req, res) => {
    const idUser = req.query.idUser;
    const reviews = await Review.findAll({
        where: {
            idUser: idUser
        },
        include: [{model: Restaurant}]
    }).catch(
        (err) => {
            console.log(err)
        }
    );

    if (reviews) {
        return res.json({ reviews })
    } else {
        return null
    }
})

export default review;  