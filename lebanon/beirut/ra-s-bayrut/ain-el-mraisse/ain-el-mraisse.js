// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ain-el-mraisse","repository":"asia","path":"lebanon/beirut/ra-s-bayrut/ain-el-mraisse","depth":4,"parent":"lebanon/beirut/ra-s-bayrut","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
