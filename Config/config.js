const env = process.env.NODE_ENV || 'development'

const config = {
    development: {
        port: process.env.PORT ||80,
        dbURL: process.env.DB_URL,
    },
    production: {
        dbURL: process.env.DB_URL,
    }
};

module.exports = config[env];