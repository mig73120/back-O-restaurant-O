import Models from "../models/Association.js"
const {Restaurant} = Models

const restaurantController = {
// Exemple de fonction pour récupérer tous les restaurants
async getAllRestaurant(req,res) {
    try {
        
        const restaurant = await Restaurant.findAll();
        res.status(200).json(restaurant);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la récupération des restaurants" });
    }
},

// Exemple de fonction pour créer un nouveau restaurant
async  createRestaurant(req, res) {
    const data = {...req.body};
    try {
        const newRestaurant = await Restaurant.create(data);
        res.status(201).json(newRestaurant);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la création du restaurant" });
    }
},

// Exemple de fonction pour récupérer un restaurant par son ID
async getRestaurantById(req, res) {
    const restaurantId = req.params.id;
    try {
        const restaurant = await Restaurant.findByPk(restaurantId);
        if (!restaurant) {
            return res.status(404).json({ message: "Restaurant non trouvé" });
        }
        res.status(200).json(restaurant);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la récupération du restaurant" });
    }
},

// Exemple de fonction pour mettre à jour un restaurant
async updateRestaurant(req, res) {
    const restaurantId = req.params.id;
    const newRestaurant ={...req.body}
    try {
        const restaurant = await Restaurant.findByPk(restaurantId);
        if (!restaurant) {
            return res.status(404).json({ message: "Restaurant non trouvé" });
        }
        await restaurant.update(newRestaurant);
        res.status(200).json(newRestaurant);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la mise à jour du restaurant" });
    }
},

// Exemple de fonction pour supprimer un utilisateur
async  deleteRestaurant(req, res) {
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
}

export default restaurantController