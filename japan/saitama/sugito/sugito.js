// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sugito","repository":"asia","path":"japan/saitama/sugito","depth":3,"parent":"japan/saitama","children":["uchida"]});
export const childModules = Object.freeze({"uchida":"./uchida/uchida.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
