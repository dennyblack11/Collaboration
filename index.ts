import express from "express"

const app = express()

const port: number = 3400;

const Server = app.listen(port, () => {
    console.log("Server is live on pport", port)
})

process.on("uncaughtException", (error) => {
    console.log("uncaughtException")

    process.exit(1)
})

process.on("unhandledRejection", (reason) => {
    console.log("Server is shutting down due to an unhandled rejection", reason);

    Server.close(() => {
        process.exit(1)
    })
})