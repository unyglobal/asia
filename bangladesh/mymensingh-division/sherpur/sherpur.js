// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sherpur","repository":"asia","path":"bangladesh/mymensingh-division/sherpur","depth":3,"parent":"bangladesh/mymensingh-division","children":["narayanpur","shaikh-hati"]});
export const childModules = Object.freeze({"narayanpur":"./narayanpur/narayanpur.js","shaikh-hati":"./shaikh-hati/shaikh-hati.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
