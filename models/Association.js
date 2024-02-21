import Restaurant from "./Restaurant.js";
import User from "./path/to/User.js";

// Relation One-to-Many: Un utilisateur peut avoir plusieurs restaurants
User.hasMany(Restaurant, {
  foreignKey: 'owner_id', // La clé étrangère dans la table des restaurants
  sourceKey: 'id', // La clé source dans la table des utilisateurs
  as: "user"
});

// Relation One-to-One: Un restaurant appartient à un seul utilisateur
Restaurant.belongsTo(User, {
  foreignKey: 'owner_id', // La clé étrangère dans la table des restaurants
  targetKey: 'id', // La clé cible dans la table des utilisateurs
  as : "restaurant"
});

// Relation Many-to-Many: Un propriétaire peut avoir plusieurs restaurants
User.belongsToMany(Restaurant, {
  through: "user_has_restaurant",
  foreignKey: 'user_id', // La clé étrangère dans la table de jointure
  otherKey: "owner_id", // La clé étrangère dans la table des restaurants
  as: "ownedRestaurants", // Alias pour cette relation
});

// Relation Many-to-Many: Un restaurant peut avoir plusieurs propriétaires
Restaurant.belongsToMany(User, {
  through: "user_has_restaurant",
  foreignKey: 'owner_id', // La clé étrangère dans la table de jointure
  otherKey: "user_id", // La clé étrangère dans la table des utilisateurs
  as: "owners", // Alias pour cette relation
});

export default {
    User, Restaurant
}