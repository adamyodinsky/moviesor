module.exports = {
    // ---------LOCAL_APP----------------------------
    appName: "Moviesor-BackEnd",
    appHost:  process.env.APP_HOST || "localhost",
    appPort: Number(process.env.APP_PORT || 3000),
    logLevel: process.env.LOG_LEVEL || "info",
    logsPath: process.env.LOGS_PATH || "./logs",
    jwtToken: process.env.JWT_SECRET,
    tokenExpiration: Number(process.env.TOKEN_EXPR) || 36000000,
    //---------SCRAPER------------------------------
    scraperHost: process.env.SCRAPER_HOST || "localhost",
    scraperPort: Number(process.env.SCRAPER_PORT) || 3001,
    scraperApi: process.env.SCRAPER_API || "v1",
    //----------MONGOOSE----------------------------
    mongoUserName: process.env.MONGO_USER || "Moviesor",
    mongoPassword: process.env.MONGO_PASS,
    mongoURI: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@moviesor-5ljou.mongodb.net/test?retryWrites=true&w=majority`,
    tomatoModelName: process.env.TOMATO_MODEL || 'tomato-movies',
    //----------------------------------------------
    tomatoUri: "https://www.rottentomatoes.com"
};