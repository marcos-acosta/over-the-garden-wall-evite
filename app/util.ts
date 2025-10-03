import { Doot } from "./interfaces";

export const getLeaderboard = (doots: Doot[]) => {
  const counts: Record<string, number> = {};
  doots.forEach((doot) => {
    if (!doot.ignoreInLeaderboard) {
      if (Object.keys(counts).includes(doot.dooter)) {
        counts[doot.dooter]++;
      } else {
        counts[doot.dooter] = 1;
      }
    }
  });
  return Object.entries(counts).toSorted((a, b) => b[1] - a[1]);
};

export const formatTime = (timestamp: number) => {
  const date = new Date(timestamp);
  const time = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const dateStr = date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
  });
  return `${time} on ${dateStr}`;
};
