export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount.first > amount.second ? amount.first : amount.second }), 500)
  );
}
