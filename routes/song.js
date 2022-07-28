const express = require("express");
const router = express.Router();
const Song = require("../models/song");

router.route("/songs").get((req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    console.log("trying to find songs")
    Song.find()
        .then(songs => {
            console.log(songs)
            res.json(songs)})
})

module.exports = router;