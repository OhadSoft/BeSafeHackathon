import { ensurePeriodsCurrent } from "./periodService.js";

const POINT_VALUES = {
    "reportPost": 50,
    "safetyTips": 10,
    "reportGood": 20,
    "extra": 5
};

/**
 * Update the user's points and add the report time and the report to the uer's report count
 * @param {*} user 
 * @param {*} action 
 */
const updateUserPoints = (user, action) => {

    ensurePeriodsCurrent(user);

    const pointsEarned = POINT_VALUES[action] || POINT_VALUES["extra"];

    user.totalPoints += pointsEarned;

    //add to reports count
      // weekly/monthly per-action progress
    user.weeklyCounts[action] = (user.weeklyCounts[action] || 0) + 1;
    user.monthlyCounts[action] = (user.monthlyCounts[action] || 0) + 1;
        
    user.lastReportTime = new Date().toISOString(); //store last update

    return pointsEarned;
};

export {
    updateUserPoints
};