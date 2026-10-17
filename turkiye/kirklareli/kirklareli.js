// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kirklareli","repository":"asia","path":"turkiye/kirklareli","depth":2,"parent":"turkiye","children":["babaeski","k-rklareli","luleburgaz"]});
export const childModules = Object.freeze({"babaeski":"./babaeski/babaeski.js","k-rklareli":"./k-rklareli/k-rklareli.js","luleburgaz":"./luleburgaz/luleburgaz.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
