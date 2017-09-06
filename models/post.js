module.exports = function(sequelize, DataType) {
	var post = sequelize.define("post", {
		title: {
			type: DataType.STRING,
			allowNull: false,
			len:[1]
		},
		text: {
			type: DataType.STRING,
			allowNull: false,
			len: [1]
		},
		category: {
			type: DataType.STRING,
			allowNull: false,
			len: [1, 20],
			defaultValue: "Charity"
		},
		points: {
			type: DataType.INTEGER,
			defaultValue: 0
		},
		proof: {
			type: DataType.STRING,
		},
		completed: {
			type: DataType.BOOLEAN,
			allowNull: false,
			defaultValue: false
		},
	});

	post.associate = function(models) {
		post.belongsTo(models.sponsor, {
		});

		post.belongsToMany(models.player, {
			through: "players2posts"
		});
	};

	return post;
}