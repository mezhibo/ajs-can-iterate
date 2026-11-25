export default function canIterate(value) {
  return value != null && typeof value[Symbol.iterator] === 'function';
}
