// Clamps a value between an upper and lower bound
export const clamp = (value, min, max) => (value < min ? min : value > max ? max : value)

// Normalize a value between two bounds
export const norm = (value, min, max) => (value - min) / (max - min)

// Linear interpolation
export const lerp = (min, max, value) => (max - min) * value + min

// Map number x from range [a, b] to [c, d]
export const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c

// Return the remainder of dividing
export const mod = (n, m) => ((n % m) + m) % m
