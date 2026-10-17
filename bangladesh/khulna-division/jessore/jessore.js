// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jessore","repository":"asia","path":"bangladesh/khulna-division/jessore","depth":3,"parent":"bangladesh/khulna-division","children":["ghop"]});
export const childModules = Object.freeze({"ghop":"./ghop/ghop.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
