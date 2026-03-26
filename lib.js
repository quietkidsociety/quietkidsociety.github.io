function qksStreakDuration(qksStreak) {
  if (qksStreak.qksStreakEnd < qksStreak.qksStreakStart) {
    return new Date() - qksStreak.qksStreakStart;
  } else {
    return qksStreak.qksStreakEnd - qksStreak.qksStreakStart;
  }
}
function qksFormatDuration(qksDuration) {
  var qksDurationMagnitude = Math.abs(qksDuration);
  var qksDurationDirection = qksDuration === 0 ? 0 : qksDuration / qksDurationMagnitude;
  return `${
    qksDurationDirection === -1 ? "-" : ""
  }${
    String(parseInt(qksDurationMagnitude / 86400000)).padStart(3, "0")
  }:${
    String(parseInt(qksDurationMagnitude % 86400000 / 3600000)).padStart(2, "0")
  }:${
    String(parseInt(qksDurationMagnitude % 3600000 / 60000)).padStart(2, "0")
  }:${
    String(parseInt(qksDurationMagnitude % 60000 / 1000)).padStart(2, "0")
  }.${
    String(parseInt(qksDurationMagnitude % 1000)).padStart(3, "0")
  }`;
}
const qksFormatimeMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov",
  "Dec"];
function qksFormatTime(qksTime) {
  return `${
    String(qksTime.getUTCDate()).padStart(2, "0")
  } ${
    qksFormatimeMonths[qksTime.getUTCMonth()]
  } ${
    qksTime.getUTCFullYear()
  } ${
    String(qksTime.getUTCHours()).padStart(2, "0")
  }:${
    String(qksTime.getUTCMinutes()).padStart(2, "0")
  }:${
    String(qksTime.getUTCSeconds()).padStart(2, "0")
  }.${
    String(qksTime.getUTCMilliseconds()).padStart(3, "0")
  } UTC`;
}