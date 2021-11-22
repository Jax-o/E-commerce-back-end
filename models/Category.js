// pseudocode 
// make models first
// use defaultValue on stock to 10
// products foregin key category_id references Category

// producttag is like trips in mini project, many to many, foreign key product_id references product
// foreign key tag_id refrences tag

// Relationships
// product to category is one to many, belongs to and has many
// Product to Tag is many to many, belongs to many, through ProductTag, only use through in many to many

// seeds should work now

// then move on to routes



const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model { }

Category.init(
	{
		// define columns
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'category',
	}
);

module.exports = Category;
