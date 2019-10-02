module.exports = {
    appName: "Moviesor-Scraper",
    appHost:  process.env.APP_HOST || "localhost",
    appPort: Number(process.env.APP_PORT || 3001),
    logLevel: process.env.LOG_LEVEL || "info",
    // tomato base url
    tomatoUri: "https://www.rottentomatoes.com",
};