export default (sequelize, DataTypes) => {
  return sequelize.define("doubt", {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
  });
};
