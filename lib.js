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
    String(Math.floor(qksDurationMagnitude / 86400000)).padStart(3, "0")
  }:${
    String(Math.floor(qksDurationMagnitude % 86400000 / 3600000)).padStart(2, "0")
  }:${
    String(Math.floor(qksDurationMagnitude % 3600000 / 60000)).padStart(2, "0")
  }:${
    String(Math.floor(qksDurationMagnitude % 60000 / 1000)).padStart(2, "0")
  }.${
    String(Math.floor(qksDurationMagnitude % 1000)).padStart(3, "0")
  }`;
}
const qksFormatimeMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov",
  "Dec"];
function qksFormatTime(qksTime) {
  const qksTimeCST = new Date(qksTime.getTime() + 28800000);
  return `${
    String(qksTimeCST.getUTCDate()).padStart(2, "0")
  } ${
    qksFormatimeMonths[qksTimeCST.getUTCMonth()]
  } ${
    qksTimeCST.getUTCFullYear()
  } ${
    String(qksTimeCST.getUTCHours()).padStart(2, "0")
  }:${
    String(qksTimeCST.getUTCMinutes()).padStart(2, "0")
  }:${
    String(qksTimeCST.getUTCSeconds()).padStart(2, "0")
  }.${
      String(qksTimeCST.getUTCMilliseconds()).padStart(3, "0")
  } GMT+08`;
}