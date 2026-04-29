import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid parameters" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      // Graceful fallback if no key is configured yet
      return NextResponse.json({ 
        role: "assistant", 
        content: "Hi there! Shubham hasn't uploaded my cognitive key (GEMINI_API_KEY) into the server vault yet. Please prompt him to fix it!" 
      });
    }

    // Convert messages into Gemini's expected format
    const geminiContents = messages.map((m: any) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.content }]
    }));

    // Inject system instructions as the very first user prompt if necessary, or pass via API format
    const systemPrompt = `You are a digital twin assistant representing Shubham, an AI Full Stack Developer. 
Your tone is intelligent, modern, friendly, and highly capable. 
Keep responses brief (max 2 paragraphs). Encourage users to hire him or test the contact workflows.`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: `[System Instruction: ${systemPrompt}]` }]
            },
            ...geminiContents
          ]
        })
      }
    );

    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error.message);
    }

    const answer = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't interpret that frequency.";

    return NextResponse.json({
      role: "assistant",
      content: answer
    });

  } catch (error: any) {
    console.error("AI Assistant Route Error:", error);
    return NextResponse.json({ error: "Interstellar connection timeout" }, { status: 500 });
  }
}
