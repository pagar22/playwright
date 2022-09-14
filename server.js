const config = require("./config.js")

console.log("MY_VAR = ", config.MY_VAR, "logging from server...")

console.log(config.BOOL === "true" ? "Yes" : "No")