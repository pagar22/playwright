require("dotenv").config()

const env = process.argv[2] || "development"

module.exports = {
    test : {
 ENV : "test",
        MY_VAR : "Hello Test",
        BOOL : "false", },
}[env] || {
    ENV : process.env.ENV,
        MY_VAR : process.env.MY_VAR,
    BOOL : process.env.BOOL, 
}