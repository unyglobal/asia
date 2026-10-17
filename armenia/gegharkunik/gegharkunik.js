// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gegharkunik","repository":"asia","path":"armenia/gegharkunik","depth":2,"parent":"armenia","children":["gavar","sevan"]});
export const childModules = Object.freeze({"gavar":"./gavar/gavar.js","sevan":"./sevan/sevan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
