import { computed, toValue, type MaybeRefOrGetter } from "vue";

export function useSkillColor(score: MaybeRefOrGetter<number | undefined | null>) {
  const style = computed(() => {
    const s = toValue(score);
    if (s == null) {
      return { backgroundColor: "#f3f4f6", color: "#4b5563" };
    }
    const t = Math.min(1, Math.max(0, s / 100));
    const hue = 210 + t * (150 - 210);
    return {
      backgroundColor: `hsl(${hue} 45% 92%)`,
      color: `hsl(${hue} 50% 30%)`,
    };
  });

  const barColor = computed(() => {
    const s = toValue(score);
    if (s == null) return "hsl(210 45% 60%)";
    const t = Math.min(1, Math.max(0, s / 100));
    const hue = 210 + t * (150 - 210);
    const hueFrom = hue - 15;
    const hueTo = hue + 10;
    return `linear-gradient(90deg, hsl(${hueFrom} 55% 55%), hsl(${hueTo} 55% 65%))`;
  });

  return { style, barColor };
}
