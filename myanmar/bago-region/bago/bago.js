// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bago","repository":"asia","path":"myanmar/bago-region/bago","depth":3,"parent":"myanmar/bago-region","children":["zaingganaing"]});
export const childModules = Object.freeze({"zaingganaing":"./zaingganaing/zaingganaing.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
