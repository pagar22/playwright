const config = require("./config.js")

console.log("MY_VAR = ", process.env.MY_VAR, "logging from server...")

console.log(config.BOOL === "true" ? "Yes" : "No")