var myAtoi = function(s) {
  const parsed = +(s.trim().match(/^[-+]?\d+/g) || [0])[0];
  const clamped = Math.min(Math.max(parsed, (-2)**31), 2**31 - 1);

  return clamped;
};