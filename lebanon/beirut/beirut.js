// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"beirut","repository":"asia","path":"lebanon/beirut","depth":2,"parent":"lebanon","children":["ra-s-bayrut"]});
export const childModules = Object.freeze({"ra-s-bayrut":"./ra-s-bayrut/ra-s-bayrut.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
