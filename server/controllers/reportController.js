import { getUserSummaryService } from "../services/userSummaryService.js";
import { createReportService } from "../services/reportService.js";

export const getUserSummary = (req, res) => {
  try {
    const result = getUserSummaryService(req.params.userID);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(err.status || 500).json({
      message: err.message || "Server error"
    });
  }
};

export const createReport = async (req, res) => {
  try {
    const result = await createReportService(req.body);
    return res.status(201).json(result);
  } catch (err) {
    return res.status(err.status || 500).json({
      message: err.message || "Server error",
      reason: err.reason
    });
  }
};
