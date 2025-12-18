const config = {
  dev: {
    url: "https://example.com/login"
  },
  qa: {
    url: "https://qa.example.com/login"
  }
};

function getEnv(key) {
  const env = process.env.ENV || "dev";
  return config[env][key];
}

module.exports = { getEnv };
