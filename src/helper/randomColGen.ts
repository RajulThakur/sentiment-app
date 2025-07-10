let lastColor = "";

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Helper to check if color is too dark or too similar to last color
function isColorValid(hex: string, last: string) {
  // Convert hex to RGB
  const rgb = hexToRgb(hex);
  if (!rgb) return false;
  const [r, g, b] = rgb;

  // Too dark (avoid black/near-black)
  if (r + g + b < 100) return false;

  // Too light (avoid white/near-white)
  if (r + g + b > 720) return false;

  // Too similar to last color (Euclidean distance in RGB)
  if (last) {
    const lastRgb = hexToRgb(last);
    if (lastRgb) {
      const dist = Math.sqrt(
        Math.pow(r - lastRgb[0], 2) +
        Math.pow(g - lastRgb[1], 2) +
        Math.pow(b - lastRgb[2], 2)
      );
      if (dist < 80) return false;
    }
  }

  return true;
}

function hexToRgb(hex: string): [number, number, number] | null {
  const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!match) return null;
  return [
    parseInt(match[1], 16),
    parseInt(match[2], 16),
    parseInt(match[3], 16),
  ];
}

export function randomColGen(): string {
  let color = "";
  let attempts = 0;
  do {
    color =
      "#" +
      getRandomInt(0, 255).toString(16).padStart(2, "0") +
      getRandomInt(0, 255).toString(16).padStart(2, "0") +
      getRandomInt(0, 255).toString(16).padStart(2, "0");
    attempts++;
    if (attempts > 20) break; // fallback to avoid infinite loop
  } while (!isColorValid(color, lastColor));
  lastColor = color;
  return color;
}