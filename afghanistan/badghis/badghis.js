// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"badghis","repository":"asia","path":"afghanistan/badghis","depth":2,"parent":"afghanistan","children":["ghormach"]});
export const childModules = Object.freeze({"ghormach":"./ghormach/ghormach.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
