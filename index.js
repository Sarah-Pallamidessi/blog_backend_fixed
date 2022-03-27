const express = require('express')
const app = express()
const routes = require("./api/routes")
const testing_routes = require("./api/testing_routes")
const port = 3000
const bodyParser = require('body-parser');


const mongoose = require("mongoose")

// Connect to MongoDB database
mongoose
	.connect("mongodb+srv://demosquare:demosquare@cluster0.tx8md.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true })
	.then(() => {
		const app = express()
        app.use(bodyParser.json());
        app.use("/api", routes)
        app.use("/api", testing_routes)

		app.listen(port, () => {
			console.log(`Example app listening on port ${port}`)
		})
	})