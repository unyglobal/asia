// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ganja-city","repository":"asia","path":"azerbaijan/ganja-city","depth":2,"parent":"azerbaijan","children":["ganja"]});
export const childModules = Object.freeze({"ganja":"./ganja/ganja.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
