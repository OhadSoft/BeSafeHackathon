export const WEEKLY_TARGETS = {
  safetyTips: 5,
  reportGood: 5,
  reportPost: 5, // your “report bad”
};

export const getMonthlyTarget = (action) => WEEKLY_TARGETS[action] * 4;
