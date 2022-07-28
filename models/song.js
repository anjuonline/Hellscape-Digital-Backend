const mongoose = require("mongoose");

const songSchema = {
    artist: String,
    artistdisplay: String,
    titledisplay: String,
    subtitledisplay: String,
    album: String,
    imageurl: String,
    soundcloud: String,
    youtube: String,
    spotify: String,
    applemusic: String,
    releasedate: String,
    cardtag: String,
    filter: String,
    credits: String,
    copy: String,
    slug: String
};

const Song = mongoose.model("Song", songSchema, "Music");

module.exports = Song;