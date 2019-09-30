
module.exports = {
    appHost:  process.env.APP_HOST || "localhost",
    appPort: Number(process.env.APP_PORT || 3000),
    logLevel: process.env.LOG_LEVEL || "info",
    // tomato base url
    tomatoUri: "https://www.rottentomatoes.com"
}