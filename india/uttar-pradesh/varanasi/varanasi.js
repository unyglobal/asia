// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"varanasi","repository":"asia","path":"india/uttar-pradesh/varanasi","depth":3,"parent":"india/uttar-pradesh","children":["dasashwamedh","kotwali"]});
export const childModules = Object.freeze({"dasashwamedh":"./dasashwamedh/dasashwamedh.js","kotwali":"./kotwali/kotwali.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
