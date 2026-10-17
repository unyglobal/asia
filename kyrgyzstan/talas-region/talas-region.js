// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"talas-region","repository":"asia","path":"kyrgyzstan/talas-region","depth":2,"parent":"kyrgyzstan","children":["talas"]});
export const childModules = Object.freeze({"talas":"./talas/talas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
