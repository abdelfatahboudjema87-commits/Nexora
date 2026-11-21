export async function onRequestPost({ request, env }) {
  try {
    if (!env.AI) {
      return Response.json(
        { error: "AI binding is not configured." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const messages = body.messages;

    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json(
        { error: "Please provide messages." },
        { status: 400 }
      );
    }

    const conversation = [
      {
        role: "system",
        content: "You are NEXORA, an intelligent, helpful and creative AI assistant. Respond clearly and naturally. Support Arabic, English and other languages."
      },
      ...messages
        .filter(m =>
          ["user", "assistant"].includes(m.role) &&
          typeof m.content === "string"
        )
        .slice(-20)
    ];

    const result = await env.AI.run(
      "@cf/meta/llama-3.1-8b-instruct",
      {
        messages: conversation,
        max_tokens: 1024
      }
    );

    return Response.json({
      reply: result.response
    });

  } catch (error) {
    return Response.json(
      { error: "AI service error. Please try again." },
      { status: 500 }
    );
  }
         }
