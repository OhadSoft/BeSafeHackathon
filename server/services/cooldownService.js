export const checkCooldown = (user, cooldownMs) => {
  if (!user.lastReportTime) return;

  const now = Date.now();
  const last = new Date(user.lastReportTime).getTime();

  if (now - last < cooldownMs) {
    const timeLeft = Math.ceil((cooldownMs - (now - last)) / 1000);
    throw {
      status: 429,
      message: `Request sent too close to last report update ${timeLeft} seconds left`
    };
  }
};
