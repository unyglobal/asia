// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chiang-mai","repository":"asia","path":"thailand/chiang-mai","depth":2,"parent":"thailand","children":["hang-dong","san-kamphaeng","san-pa-tong"]});
export const childModules = Object.freeze({"hang-dong":"./hang-dong/hang-dong.js","san-kamphaeng":"./san-kamphaeng/san-kamphaeng.js","san-pa-tong":"./san-pa-tong/san-pa-tong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
