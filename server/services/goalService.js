import { WEEKLY_TARGETS, getMonthlyTarget } from "./targets.js";

const MONTHLY_BONUS = 500;

export const updateGoalStatus = (user) => {
  // if already rewarded this month, no need to re-check
  if (user.monthlyGoalAchieved) return false;

  const actions = Object.keys(WEEKLY_TARGETS);

  const allMet = actions.every((action) => {
    const monthlyCount = user.monthlyCounts?.[action] || 0;
    return monthlyCount >= getMonthlyTarget(action);
  });

  if (allMet) {
    user.monthlyGoalAchieved = true;
    user.totalPoints += MONTHLY_BONUS;
    console.log(`${user.username} reached monthly goal!`);
    return true;
  }

  return false;
};
