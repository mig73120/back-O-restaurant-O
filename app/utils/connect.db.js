import Sequelize from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "C:/Users/Torrent/OneDrive/Bureau/TITRE PROFESSIONNEL/O-restaurant/back-O-restaurant-O/db/db.sqlite"
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default sequelize;

