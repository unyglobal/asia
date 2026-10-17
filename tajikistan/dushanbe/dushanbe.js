// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dushanbe","repository":"asia","path":"tajikistan/dushanbe","depth":2,"parent":"tajikistan","children":["boshkengash"]});
export const childModules = Object.freeze({"boshkengash":"./boshkengash/boshkengash.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
