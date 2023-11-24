// Não esqueça de criar um arquivo .env na raiz do seu projeto com o seguinte conteúdo:
// OPENAI_API_KEY=coloque_aqui_sua_chave

require('dotenv').config();
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const { OpenAI } = require('openai');
const openai = new OpenAI(OPENAI_API_KEY);

const express = require('express');
const app = express();
app.use(express.json());

app.post('/pergunte-ao-chatgpt', (req, res) => {
    const { prompt } = req.body;
    console.log(prompt);
    res.json({ seuPrompt: prompt });
});

app.listen(4000, () => console.log('ChatGPT_Backend em execução na porta 4000'));