import express from "express";
const router = express.Router();
import restaurantController from "../controllers/restaurantController.js";
import userController from "../controllers/userController.js";
import authController from "../controllers/auth.controller.js";

// Route pour récupérer tous les utilisateurs
router.get("/users", userController.getAllUsers);

// Route pour se loggé
router.post("/auth/login", authController.login);

// Route pour créer un nouvel utilisateur
router.post("/auth/register", authController.register);

// Route pour récupérer un utilisateur par son ID
router.get("/users/:id", userController.getUserById);

// Route pour mettre à jour un utilisateur
router.put("/users/:id", userController.updateUser);

// Route pour supprimer un utilisateur
router.delete("/users/:id", userController.deleteUser);

// Route pour récupérer tous les restaurants
router.get("/restaurants", restaurantController.getAllRestaurant);

// Route pour créer un nouveau restaurant
router.post("/restaurants", restaurantController.createRestaurant);

// Route pour récupérer un restaurant par son ID
router.get("/restaurants/:id", restaurantController.getRestaurantById);

// Route pour mettre à jour un restaurant par son ID
router.put("/restaurants/:id", restaurantController.updateRestaurant);

// Route pour supprimer un restaurant par son ID
router.delete("/restaurants/:id", restaurantController.deleteRestaurant);

// Export du routeur
export default router;
