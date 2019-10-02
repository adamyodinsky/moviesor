module.exports = {
    appName: "Moviesor-BackEnd",
    appHost:  process.env.APP_HOST || "localhost",
    appPort: Number(process.env.APP_PORT || 3000),
    logLevel: process.env.LOG_LEVEL || "info",
    // tomato base url
    tomatoUri: "https://www.rottentomatoes.com",
    mongoUserName: process.env.MONGO_USER || "Moviesor",
    mongoPassword: process.env.MONGO_PASS,
    mongoURI: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@moviesor-5ljou.mongodb.net/test?retryWrites=true&w=majority`
};