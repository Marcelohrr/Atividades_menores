
import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Método não permitido."
        });
    }

    const { ingredients } = req.body ?? {};

    if (!Array.isArray(ingredients) || ingredients.length === 0) {
        return res.status(400).json({
            error: "Lista de ingredientes inválida."
        });
    }

    try {
        const completion = await groq.chat.completions.create({
            model: "openai/gpt-oss-20b",
            messages: [
                {
                    role: "user",
                    content: `Crie uma receita usando os seguintes ingredientes: ${ingredients.join(", ")}`
                }
            ],
            max_completion_tokens: 500
        });

        return res.status(200).json({
            recipe: completion.choices[0].message.content
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: "Erro ao gerar a receita."
        });
    }
}