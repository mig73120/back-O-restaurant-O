const { User } = require('./models'); // Assurez-vous que le chemin est correct selon l'emplacement de votre modèle Sequelize

// Exemple de fonction pour récupérer tous les utilisateurs
async function getAllUsers(res) {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la récupération des utilisateurs" });
    }
}

// Exemple de fonction pour créer un nouvel utilisateur
async function createUser(req, res) {
    const { userFirstName, email } = req.body;
    try {
        const newUser = await User.create({ userFirstName, email });
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la création de l'utilisateur" });
    }
}

// Exemple de fonction pour récupérer un utilisateur par son ID
async function getUserById(req, res) {
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
}

// Exemple de fonction pour mettre à jour un utilisateur
async function updateUser(req, res) {
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
}

// Exemple de fonction pour supprimer un utilisateur
async function deleteUser(req, res) {
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

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
};
