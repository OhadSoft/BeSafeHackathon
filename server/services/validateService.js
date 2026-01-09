import { validateReportsWithAI } from "../utils/aiHelper.js";

export const validateReport = async ({ description, action }) => {
  if (!description || typeof description !== "string" || description.trim().length < 3) {
    throw {
      status: 400,
      message: "Invalid report description",
      reason: "Description too short"
    };
  }

  const aiDecision = await validateReportsWithAI(description, action);

  if (!aiDecision.isValid) {
    throw {
      status: 400,
      message: "The AI decided this is not a valid report",
      reason: aiDecision.reason
    };
  }

  return aiDecision;
};
