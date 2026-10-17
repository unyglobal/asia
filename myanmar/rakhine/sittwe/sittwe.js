// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sittwe","repository":"asia","path":"myanmar/rakhine/sittwe","depth":3,"parent":"myanmar/rakhine","children":["myoma","shwebya"]});
export const childModules = Object.freeze({"myoma":"./myoma/myoma.js","shwebya":"./shwebya/shwebya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
