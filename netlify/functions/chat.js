// netlify/functions/chat.js
// This serverless function acts as a proxy to hide your API key

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // Parse the request body
  const { message, conversationHistory, portfolioContext } = JSON.parse(event.body);

  // Rate limiting check (basic implementation)
  // In production, use a proper rate limiting service

  try {
    const response = await fetch(
      `${process.env.GEMINI_API_URL}?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{
                text: `You are an AI assistant for Christopher Kumar's portfolio website. 
                You should ONLY answer questions about Christopher's professional background, projects, skills, and experience.
                Be helpful, concise, and professional. If asked about topics unrelated to Christopher's portfolio, 
                politely redirect the conversation back to his professional work.
                
                Here is Christopher's portfolio information:
                ${portfolioContext}
                
                Important guidelines:
                - Only discuss information provided in the portfolio context
                - Don't make up or assume information not in the context
                - Keep responses concise (2-3 sentences max)
                - Be professional and helpful
                - If asked about contact information, refer to the links in the header
                - Don't engage with inappropriate or off-topic questions`
              }]
            },
            ...conversationHistory,
            {
              role: "user",
              parts: [{ text: message }]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 1,
            topP: 1,
            maxOutputTokens: 200,
          },
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_HATE_SPEECH",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_DANGEROUS_CONTENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            }
          ]
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || 'API request failed');
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Configure this for your domain in production
      },
      body: JSON.stringify({
        response: data.candidates[0]?.content?.parts?[0]?.text || 'I can help you learn about Christopher\'s projects and experience.'
      })
    };
  } catch (error) {
    console.error('Chat API error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to process request',
        fallback: true 
      })
    };
  }
};