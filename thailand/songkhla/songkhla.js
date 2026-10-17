// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"songkhla","repository":"asia","path":"thailand/songkhla","depth":2,"parent":"thailand","children":["ban-mai","hat-yai","ranot","sadao"]});
export const childModules = Object.freeze({"ban-mai":"./ban-mai/ban-mai.js","hat-yai":"./hat-yai/hat-yai.js","ranot":"./ranot/ranot.js","sadao":"./sadao/sadao.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
