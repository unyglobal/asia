// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chanthaburi","repository":"asia","path":"thailand/chanthaburi","depth":2,"parent":"thailand","children":["laem-sing","tha-mai"]});
export const childModules = Object.freeze({"laem-sing":"./laem-sing/laem-sing.js","tha-mai":"./tha-mai/tha-mai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
