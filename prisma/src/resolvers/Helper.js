const rebuild = () => {
  if (process.env.NODE_ENV === "production") {
    console.log("Build hook function called in production");
    return fetch(
      "https://api.netlify.com/build_hooks/5a85c258fd0efa5a7290bd70",
      {
        method: "POST"
      }
    );
  } else {
    console.log("Build hook function called in development");
  }
};

module.exports = { rebuild };
