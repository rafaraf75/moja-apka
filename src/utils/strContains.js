// case-insensitive: true, jeśli haystack zawiera needle
const strContains = (haystack, needle) =>
  haystack.toLowerCase().includes((needle || '').toLowerCase());

export default strContains;
