module.exports = function(sequelize, DataType) {
	var player = sequelize.define("player", {
		moderator: {
			type: DataType.BOOLEAN,
			defaultValue: false
		},
		points: {
			type: DataType.STRING,
			defaultValue: 0
		},
		name: {
			type: DataType.STRING,
			allowNull: false,
			len: [1, 20]
		},
		email: {
			type: DataType.STRING,
			allowNull: false,
			isEmail: true
		}
	})

	player.associate = function(models) {
		player.belongsToMany(models.post, {
			through: "players2posts"
		});
	};

	return player;
}