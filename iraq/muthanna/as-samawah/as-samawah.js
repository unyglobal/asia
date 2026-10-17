// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"as-samawah","repository":"asia","path":"iraq/muthanna/as-samawah","depth":3,"parent":"iraq/muthanna","children":["at-tamim"]});
export const childModules = Object.freeze({"at-tamim":"./at-tamim/at-tamim.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
