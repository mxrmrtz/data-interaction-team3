const express = require("express");
const bodyParser = require("body-parser");
const { ShoppingListTable } = require("./src/tables");

const app = express();
const port = 3001;

app.get("/api", async (req, res) => {
	const tasks = await ShoppingListTable.findAll();
	res.send(tasks);
});

app.listen(port);
