module.exports = {
    // -----LOCAL-APP-------------------
    appName: "Moviesor-Scraper",
    appHost:  process.env.APP_HOST || "localhost",
    appPort: Number(process.env.APP_PORT || 3001),
    logLevel: process.env.LOG_LEVEL || "info",
    //------DB-MANAGER------------------
    dbManagerHost: process.env.DB_MANAGER_HOST || "localhost",
    dbManagerPort: Number(process.env.APP_PORT || 3002),
    dbManagerApi: process.env.DB_MANAGER_API || "v1",
    //-------------------------
    tomatoUri: "https://www.rottentomatoes.com",
};