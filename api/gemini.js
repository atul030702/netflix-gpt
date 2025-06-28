import { GoogleGenAI } from "@google/genai";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    try {
        const { prompt } = req.body;

        const ai = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY
        });

        const result = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });

        res.status(200).json({ result: result.text });

    }catch (error) {
        console.error("Gemini API error:", error.message);
        res.status(500).json({ error: "Failed to fetch Gemini response" })
    }
}