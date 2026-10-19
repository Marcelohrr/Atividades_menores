
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

    if (
        !Array.isArray(ingredients) ||
        ingredients.length === 0 ||
        !ingredients.every(
            ingredient =>
                typeof ingredient === "string" &&
                ingredient.trim().length > 0
        )
    ) {
        return res.status(400).json({
            error: "Lista de ingredientes inválida."
        });
    }

    try {
        const completion = await groq.chat.completions.create({
            model: "openai/gpt-oss-20b",

            messages: [
                {
                    role: "system",
                    content: `Você é o Chef Gastrô, um assistente culinário.

Crie receitas práticas, completas e saborosas.

Regras:
- Responda sempre em português brasileiro.
- Utilize os ingredientes fornecidos pelo usuário.
- Você pode sugerir ingredientes complementares comuns.
- Apresente um título para a receita.
- Informe o número de porções e o tempo estimado.
- Liste os ingredientes e suas quantidades.
- Explique o modo de preparo em etapas numeradas.
- Seja objetivo, mas não omita etapas importantes.
- Não utilize tabelas.
- Finalize a receita completamente.`
                },
                {
                    role: "user",
                    content: `Crie uma receita usando estes ingredientes: ${ingredients.join(", ")}.`
                }
            ],

            max_completion_tokens: 2000
        });

        const choice = completion.choices?.[0];
        const recipe = choice?.message?.content;

        if (!recipe || choice.finish_reason === "length") {
            console.error(
                "Resposta incompleta da Groq:",
                choice?.finish_reason
            );

            return res.status(502).json({
                error: "A receita não foi concluída. Tente novamente."
            });
        }

        return res.status(200).json({
            recipe
        });

    } catch (error) {
        console.error("Erro na API Groq:", error);

        return res.status(500).json({
            error: "Erro ao gerar a receita. Tente novamente."
        });
    }
}