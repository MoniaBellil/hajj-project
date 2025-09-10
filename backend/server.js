import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/hajj", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connecté à MongoDB local"))
  .catch((err) => console.error("Erreur MongoDB :", err));

// Schéma
const InscriptionSchema = new mongoose.Schema({
  nom: String,
  email: String,
  tel: String,
  formule: String,
});
const Inscription = mongoose.model("Inscription", InscriptionSchema);

// Route POST

app.post("/api/inscriptions", async (req, res) => {
    try {
      console.log(" Reçu :", req.body);  
  
      const inscription = new Inscription(req.body);
      const saved = await inscription.save();
  
      console.log(" Sauvé dans MongoDB :", saved); 
  
      res.json({ success: true, data: saved });
    } catch (err) {
      console.error(" Erreur lors du save :", err); 
      res.status(500).json({ success: false, error: err.message });
    }
  });
  

// Route GET (pour tester dans le navigateur)
app.get("/api/inscriptions", async (req, res) => {
  const data = await Inscription.find();
  res.json(data);
});

app.listen(5000, () => console.log(" API running on http://localhost:5000"));
