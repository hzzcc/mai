// Validation utilities
export const isEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isPhone = (phone: string): boolean => {
  return /^1[3-9]\d{9}$/.test(phone);
};

