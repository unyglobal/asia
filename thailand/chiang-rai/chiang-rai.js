// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chiang-rai","repository":"asia","path":"thailand/chiang-rai","depth":2,"parent":"thailand","children":["mae-chan","mae-sai"]});
export const childModules = Object.freeze({"mae-chan":"./mae-chan/mae-chan.js","mae-sai":"./mae-sai/mae-sai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
