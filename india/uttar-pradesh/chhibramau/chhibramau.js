// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chhibramau","repository":"asia","path":"india/uttar-pradesh/chhibramau","depth":3,"parent":"india/uttar-pradesh","children":["rampur-baiju"]});
export const childModules = Object.freeze({"rampur-baiju":"./rampur-baiju/rampur-baiju.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
