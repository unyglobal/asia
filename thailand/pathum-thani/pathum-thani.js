// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pathum-thani","repository":"asia","path":"thailand/pathum-thani","depth":2,"parent":"thailand","children":["ban-bang-kadi","ban-lam-luk-ka","khlong-luang"]});
export const childModules = Object.freeze({"ban-bang-kadi":"./ban-bang-kadi/ban-bang-kadi.js","ban-lam-luk-ka":"./ban-lam-luk-ka/ban-lam-luk-ka.js","khlong-luang":"./khlong-luang/khlong-luang.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
