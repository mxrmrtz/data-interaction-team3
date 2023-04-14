const { Sequelize, DataTypes } = require("sequelize");
const { dotenv } = require("dotenv");
require("dotenv").config();

console.log(typeof process.env.DB_PASSWORD);

const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USERNAME,
	process.env.DB_PASSWORD,
	{
		host: "104.199.12.40",
		dialect: "postgres",
	}
);

const ShoppingListTable = sequelize.define("data-interaction-team3", {
	id: {
		primaryKey: true,
		type: DataTypes.INTEGER,
		autoIncrement: true,
	},
	itemName: {
		type: DataTypes.TEXT,
	},
	picked: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: false,
	},
});

sequelize
	.sync()
	.then(() => {
		console.log("Model synced with database!");
	})
	.catch((error) => {
		console.error("Error syncing model with database:", error);
	});

module.exports ={
	ShoppingListTable
}