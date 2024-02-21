const express = require('express');
const router = express.Router();
const { getAllUsers, createUser, getUserById, updateUser, deleteUser } = require('./controllers/userController');
const restaurantController = require('./controllers/restaurantController');

// Route pour récupérer tous les utilisateurs
router.get('/users', getAllUsers);

// Route pour créer un nouvel utilisateur
router.post('/users', createUser);

// Route pour récupérer un utilisateur par son ID
router.get('/users/:id', getUserById);

// Route pour mettre à jour un utilisateur
router.put('/users/:id', updateUser);

// Route pour supprimer un utilisateur
router.delete('/users/:id', deleteUser);



// Import des dépendances



// Route pour récupérer tous les restaurants
router.get('/restaurants', restaurantController.getAllRestaurant);

// Route pour créer un nouveau restaurant
router.post('/restaurants', restaurantController.createRestaurant);

// Route pour récupérer un restaurant par son ID
router.get('/restaurants/:id', restaurantController.getRestaurantById);

// Route pour mettre à jour un restaurant par son ID
router.put('/restaurants/:id', restaurantController.updateRestaurant);

// Route pour supprimer un restaurant par son ID
router.delete('/restaurants/:id', restaurantController.deleteRestaurant);

// Export du routeur
module.exports = router;
