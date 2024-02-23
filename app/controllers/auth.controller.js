import bcrypt from "bcrypt";
import  jwt  from "jsonwebtoken";
import Models from "../models/Association.js"
const { User } = Models


const authController = {

   async login(req,res){
        const { email, password} = req.body; 
        try {
            const user = await User.findOne({where : {email}});
            
        const ok = await bcrypt.compare(password, user.password);

        if (!ok) {
            return res.status(401).json({ message: "Bad log, retry please !" });
        }
        
        const token = jwt.sign({ userId: user.id }, process.env.PRIVATEKEY,{
            expiresIn: "1h",
        });

        return res.status(200).json({id : user.id, appToken : token})
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Bad log, retry please !" });
        }
    },

    async register(req, res) {

        // récupérer la data du front
       const { firstname, lastname, email, password, adress, city, zip, phone, profil_picture } = req.body;
        try {

            // changer le pass vers un pass crypté
            const salt = await bcrypt.genSalt();
            const encryptedPass = await bcrypt.hash(password, salt);

            // Enregistre le user avec le pass crypté
            const newUser = await User.create({
            firstname,
            lastname,
            email,
            password: encryptedPass,
            adress,
            city,
            zip,
            phone,
            profil_picture,
            owner : false
              });

            res.status(201).json(newUser);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erreur lors de la création de l'utilisateur" });
        }
    },
}

export default authController