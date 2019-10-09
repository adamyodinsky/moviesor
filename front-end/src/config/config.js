const config = {
    // ---------LOCAL_APP----------------------------
    appName: "MoChooe-FrontEnd",
    appHost: process.env.REACT_APP_APP_HOST || "localhost",
    appPort: Number(process.env.REACT_APP_APP_PORT) || 80,
    yearMax: Number(process.env.REACT_APP_YEAR_MAX) || 2019,
    yearMin: Number(process.env.REACT_APP_YEAR_MIN) || 1920,
    //---------BACk-END------------------------------
    backEndHost: process.env.REACT_APP_BACKEND_HOST || "localhost",
    backEndPort: Number(process.env.REACT_APP_BACKEND_PORT) || 80,
    envTest: process.env.REACT_APP_ENV_TEST || 'env test failed'
};

export default config;