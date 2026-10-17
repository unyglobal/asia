// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"northern","repository":"asia","path":"bahrain/northern","depth":2,"parent":"bahrain","children":["madinat-hamad"]});
export const childModules = Object.freeze({"madinat-hamad":"./madinat-hamad/madinat-hamad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
