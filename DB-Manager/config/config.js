module.exports = {
    // ---------LOCAL_APP----------------------------
    appName: "Moviesor-DB-Manager",
    appHost:  process.env.APP_HOST || "localhost",
    appPort: Number(process.env.APP_PORT || 3002),
    // -----Back-End-------------------
    backEndHost:  process.env.BACKEND_HOST || "localhost",
    backEndPort: Number(process.env.BACKEND_PORT || 3000),
    backEndApi: process.env.BACKEND_API || "v1",
    //---------SCRAPER------------------------------
    scraperHost: process.env.SCRAPER_HOST || "localhost",
    scraperPort: Number(process.env.SCRAPER_PORT) || 3001,
    scraperApi: process.env.SCRAPER_API || "v1",
    //----------MONGOOSE-CONFIG---------------------------
    mongoUserName: process.env.MONGO_USER || "Moviesor",
    mongoPassword: process.env.MONGO_PASS,
    mongoURI: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@moviesor-5ljou.mongodb.net/test?retryWrites=true&w=majority`,
    //------------OTHERS----------------------------------
    tomatoUri: "https://www.rottentomatoes.com",
    logLevel: process.env.LOG_LEVEL || "info"
};