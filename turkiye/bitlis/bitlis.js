// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bitlis","repository":"asia","path":"turkiye/bitlis","depth":2,"parent":"turkiye","children":["adilcevaz","ahlat","guroymak","hizan","tatvan"]});
export const childModules = Object.freeze({"adilcevaz":"./adilcevaz/adilcevaz.js","ahlat":"./ahlat/ahlat.js","guroymak":"./guroymak/guroymak.js","hizan":"./hizan/hizan.js","tatvan":"./tatvan/tatvan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
