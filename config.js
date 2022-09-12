require("dotenv").config()

switch(process.argv[2]) {
        case "test" : process.env.BOOL = false; break;
        case "dev" : process.env.BOOL = false; break;
        default: console.error("Expected 1 argument")
}

module.exports = {
    ENV : process.env.ENV || "development",
    MY_VAR : process.env.MY_VAR || "Default Var",
    BOOL : process.env.BOOL || false,
}