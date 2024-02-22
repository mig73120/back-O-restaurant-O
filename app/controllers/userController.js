import Models from "../models/Association.js"
const {User} = Models

const userController = {
// Exemple de fonction pour récupérer tous les utilisateurs
async getAllUsers(req,res) {
    try {
        const users = await User.findAll();
        
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la récupération des utilisateurs" });
    }
},

// Exemple de fonction pour créer un nouvel utilisateur
async createUser(req, res) {
    const data = {...req.body};
    try {
        const newUser = await User.create(data);
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la création de l'utilisateur" });
    }
},

// Exemple de fonction pour récupérer un utilisateur par son ID
async getUserById(req, res) {
    const userId = req.params.id;
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la récupération de l'utilisateur" });
    }
},

// Exemple de fonction pour mettre à jour un utilisateur
async updateUser(req, res) {
    const userId = req.params.id;
    const newData = {...req.body};
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }
        await user.update(newData);
        res.status(200).json(newData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la mise à jour de l'utilisateur" });
    }
},

// Exemple de fonction pour supprimer un utilisateur
async deleteUser(req, res) {
    const id = req.params.id;
    try {
        await User.destroy({where : {id}});
        res.status(200).json({ message: "Utilisateur supprimé avec succès" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la suppression de l'utilisateur" });
    }
}
}


export default userController