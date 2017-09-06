module.exports = function(sequelize, DataType) {
	var sponsor = sequelize.define("sponsor", {
		moderator: {
			type: DataType.BOOLEAN,
			defaultValue: false
		},
		points: {
			type: DataType.INTEGER,
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

	sponsor.associate = function(models) {
		sponsor.hasMany(models.post, {
		});
	};

	return sponsor;
}