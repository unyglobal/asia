// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gjien-bien-province","repository":"asia","path":"vietnam/gjien-bien-province","depth":2,"parent":"vietnam","children":["dien-bien-phu","muong-lay"]});
export const childModules = Object.freeze({"dien-bien-phu":"./dien-bien-phu/dien-bien-phu.js","muong-lay":"./muong-lay/muong-lay.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
