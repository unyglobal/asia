// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"turbat","repository":"asia","path":"pakistan/balochistan/turbat","depth":3,"parent":"pakistan/balochistan","children":["malik-abad"]});
export const childModules = Object.freeze({"malik-abad":"./malik-abad/malik-abad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
