const { Restaurant } = require('./models'); // Assurez-vous que le chemin est correct selon l'emplacement de votre modèle Sequelize

// Exemple de fonction pour récupérer tous les restaurants
async function getAllRestaurant(res) {
    try {
        const restaurant = await Restaurant.findAll();
        res.json(restaurant);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la récupération des restaurants" });
    }
}

// Exemple de fonction pour créer un nouveau restaurant
async function createRestaurant(req, res) {
    const { restaurantName, email } = req.body;
    try {
        const newRestaurant = await Restaurant.create({ restaurantName, email });
        res.status(201).json(newRestaurant);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la création du restaurant" });
    }
}

// Exemple de fonction pour récupérer un restaurant par son ID
async function getRestaurantById(req, res) {
    const restaurantId = req.params.id;
    try {
        const restaurant = await Restaurant.findByPk(restaurantId);
        if (!restaurant) {
            return res.status(404).json({ message: "Restaurant non trouvé" });
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la récupération du restaurant" });
    }
}

// Exemple de fonction pour mettre à jour un restaurant
async function updateRestaurant(req, res) {
    const restaurantId = req.params.id;
    const { restaurantName, email } = req.body;
    try {
        const restaurant = await Restaurant.findByPk(restaurantId);
        if (!restaurant) {
            return res.status(404).json({ message: "Restaurant non trouvé" });
        }
        restaurant.restaurantName = restaurantName;
        restaurant.email = email;
        await restaurant.save();
        res.json(restaurant);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la mise à jour du restaurant" });
    }
}

// Exemple de fonction pour supprimer un utilisateur
async function deleteRestaurant(req, res) {
    const restaurantId = req.params.id;
    try {
        const restaurant = await Restaurant.findByPk(restaurantId);
        if (!restaurant) {
            return res.status(404).json({ message: "Restaurant non trouvé" });
        }
        await restaurant.destroy();
        res.json({ message: "Restaurant supprimé avec succès" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la suppression du restaurant" });
    }
}

module.exports = {
    getAllRestaurant,
    createRestaurant,
    getRestaurantById,
    updateRestaurant,
    deleteRestaurant
};
