require('dotenv').config()

module.exports = {
    env: {
        RED_BUCAL_MONGODB_HOTS: process.env.RED_BUCAL_MONGODB_HOTS,
        RED_BUCAL_MONGODB_DATABASE: process.env.RED_BUCAL_MONGODB_DATABASE,
        TOKEN_MAP: process.env.TOKEN_MAP,
        TOKEN_SEND_GRID: process.env.TOKEN_SEND_GRID
    }
}