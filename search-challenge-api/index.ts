import express from "express"
import winston from "winston"
import * as routes from "./app/routes"
import * as database from "./conf/database"

database.connect("mongodb://search-challenge-user:search-challenge-pass@docker-alias:27017/search-challenge")
const app = express()
app.use(express.static("public"))
routes.register(app)
app.listen(3001, () => {
  winston.info("Running on http://localhost:3001")
})
