import Models from "../models/Association.js"
const {User} = Models

const userController = {
// Exemple de fonction pour récupérer tous les utilisateurs
async getAllUsers(req,res) {
    try {
        const users = await User.findAll();
        console.log("USERS",users);
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
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la récupération de l'utilisateur" });
    }
},

// Exemple de fonction pour mettre à jour un utilisateur
async updateUser(req, res) {
    const userId = req.params.id;
    const { userFirstNname, email } = req.body;
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }
        user.userFirstName = userFirstName;
        user.email = email;
        await user.save();
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la mise à jour de l'utilisateur" });
    }
},

// Exemple de fonction pour supprimer un utilisateur
async deleteUser(req, res) {
    const userId = req.params.id;
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }
        await user.destroy();
        res.json({ message: "Utilisateur supprimé avec succès" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la suppression de l'utilisateur" });
    }
}
}


export default userController