export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const queries = weakMap.get(endpoint);
    if (queries >= 4) throw Error('Endpoint load is high');
    weakMap.set(endpoint, queries + 1);
  } else { weakMap.set(endpoint, 1); }
}
