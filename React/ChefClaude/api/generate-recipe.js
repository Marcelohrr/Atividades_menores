import { InferenceClient } from "@huggingface/inference"

const hf = new InferenceClient(process.env.HF_ACCESS_TOKEN)

export default async function handler(req, res) {
    try {
        const { ingredients } = req.body

        const completion = await hf.chatCompletion({
            model: "deepseek-ai/DeepSeek-V3-0324",
            messages: [
                {
                    role: "user",
                    content: `Crie uma receita usando os seguintes ingredientes: ${ingredients.join(", ")}`
                }
            ],
            max_tokens: 500,
        })

        res.status(200).json({
            recipe: completion.choices[0].message.content
        })
    } catch (error) {
        console.error(error)

        res.status(500).json({
            error: "Erro ao gerar a receita."
        })
    }
}