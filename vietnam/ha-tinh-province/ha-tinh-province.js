// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ha-tinh-province","repository":"asia","path":"vietnam/ha-tinh-province","depth":2,"parent":"vietnam","children":["ha-tinh","hong-linh","ky-anh","nghen"]});
export const childModules = Object.freeze({"ha-tinh":"./ha-tinh/ha-tinh.js","hong-linh":"./hong-linh/hong-linh.js","ky-anh":"./ky-anh/ky-anh.js","nghen":"./nghen/nghen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
