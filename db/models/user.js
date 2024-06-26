const { DataTypes } = require("sequelize");
const db = require("../db");
const Track = require("./track");

const User = db.define("users", {
    userId: { 
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true 
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,  
        allowNull: true,
    },
    profilePicUrl: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    coverPicUrl: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    spotifyLogin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: true,
        validate: { isEmail: true}
    },
    currentlyListeningId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Track,
            key: "trackId"
        }
    },
    accessToken: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    refreshToken: {
        type: DataTypes.TEXT, 
        allowNull: true, 
    },
    spotifyProfileId: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    spotifyPlaylistId:{
        type: DataTypes.STRING,
        allowNull: true,
    }
});
module.exports = User;