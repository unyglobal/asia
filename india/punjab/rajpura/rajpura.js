// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rajpura","repository":"asia","path":"india/punjab/rajpura","depth":3,"parent":"india/punjab","children":["banwari"]});
export const childModules = Object.freeze({"banwari":"./banwari/banwari.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
