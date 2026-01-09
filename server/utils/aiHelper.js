import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const validateReportsWithAI = async (description, action) => {
  const prompt = `
You are an automated moderator for a web safety-reporting app.

The user is reporting a "${action}" with the following description:
"${description}"

Rules:
- VALID: Realistic safety concerns, helpful tips, or detailed reports.
- INVALID: Gibberish (e.g., "asdf"), low effort (e.g., "cool", "hi"), or testing (e.g., "test").

Decide whether the report is valid.
`;

  try {
    const response = await openai.responses.create({
      model: "gpt-4.1-mini", // fast + cheap, ideal for moderation
      input: prompt,
      response_format: {
        type: "json_schema",
        json_schema: {
          name: "validation_result",
          schema: {
            type: "object",
            properties: {
              isValid: { type: "boolean" },
              reason: { type: "string" }
            },
            required: ["isValid", "reason"],
            additionalProperties: false
          }
        }
      }
    });

    return response.output_parsed;
  } catch (error) {
    console.error("AI Validator error:", error);
    return { isValid: true, reason: "Bypassed due to service error" };
  }
};
