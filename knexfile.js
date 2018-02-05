module.exports = {
  development: {
    client: "pg",
    connection: "postgresql:///practice",
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
  },
};
