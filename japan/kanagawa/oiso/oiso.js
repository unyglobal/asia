// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"oiso","repository":"asia","path":"japan/kanagawa/oiso","depth":3,"parent":"japan/kanagawa","children":["chojamachi","daimachi"]});
export const childModules = Object.freeze({"chojamachi":"./chojamachi/chojamachi.js","daimachi":"./daimachi/daimachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
