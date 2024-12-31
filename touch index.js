const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();

// Middleware para manejar JSON y habilitar CORS
app.use(cors());
app.use(express.json());

// Ruta para el proxy
app.post("/proxy", async (req, res) => {
  try {
    const googleAppsScriptURL = "https://script.google.com/macros/s/AKfycbza80TCd2Zepjc9PVr_gvWFVM5jBMjqfknuWh4u0A8cchcXRMMAx7IOgX2iLKnc7Ys8eQ/exec";

    // Enviar los datos al Google Apps Script
    const response = await fetch(googleAppsScriptURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    // Leer la respuesta del Google Apps Script
    const result = await response.json();

    // Devolver la respuesta al cliente
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Proxy corriendo en http://localhost:${PORT}`);
});
