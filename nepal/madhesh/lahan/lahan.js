// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lahan","repository":"asia","path":"nepal/madhesh/lahan","depth":3,"parent":"nepal/madhesh","children":["chamapur"]});
export const childModules = Object.freeze({"chamapur":"./chamapur/chamapur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
