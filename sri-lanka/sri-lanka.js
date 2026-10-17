// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sri-lanka","repository":"asia","path":"sri-lanka","depth":1,"parent":"","children":["central-province","eastern-province","north-central-province","north-western-province","northern-province","sabaragamuwa-province","southern-province","uva-province","western-province"]});
export const childModules = Object.freeze({"central-province":"./central-province/central-province.js","eastern-province":"./eastern-province/eastern-province.js","north-central-province":"./north-central-province/north-central-province.js","north-western-province":"./north-western-province/north-western-province.js","northern-province":"./northern-province/northern-province.js","sabaragamuwa-province":"./sabaragamuwa-province/sabaragamuwa-province.js","southern-province":"./southern-province/southern-province.js","uva-province":"./uva-province/uva-province.js","western-province":"./western-province/western-province.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
