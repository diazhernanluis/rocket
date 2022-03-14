const config = {
    server: {
        port: process.env.SERVER_PORT
    },
    db: {
        connectionString: process.env.DB_CONNECTION_STRING,
        dbname: process.env.DB_NAME
    },
    weather: {
        base_url: process.env.BASE_URL,
        api: process.env.API,
        city: process.env.EX_CITY,
    },
    spaceData: {
        launches: process.env.LAUNCHES,
        rockets : process.env.ROCKETS
    }
  };
  
  module.exports = {
    ...config,
  };
  