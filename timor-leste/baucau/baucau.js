// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"baucau","repository":"asia","path":"timor-leste/baucau","depth":2,"parent":"timor-leste","children":["baukau","venilale"]});
export const childModules = Object.freeze({"baukau":"./baukau/baukau.js","venilale":"./venilale/venilale.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
