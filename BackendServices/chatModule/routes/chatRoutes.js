const { GoogleGenerativeAI } = require("@google/generative-ai");
console.log(process.env.NODE_GENERATIVE_AI_API_KEY)
const client = new GoogleGenerativeAI(process.env.NODE_GENERATIVE_AI_API_KEY);

const model = client.getGenerativeModel({ model: "gemini-1.5-flash" });
const chatRoutes = (app) => {
  app.post("/generate-text", async (req, res) => {
    const { prompt } = req.body;
    try {
      const result = await model.generateContent([prompt]);
      res.send({ output: result.response.text() });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    }
  });
};

module.exports = {
  chatRoutes,
};
