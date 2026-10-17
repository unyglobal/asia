// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aghjabadi-rayon","repository":"asia","path":"azerbaijan/aghjabadi-rayon","depth":2,"parent":"azerbaijan","children":["aghjabadi"]});
export const childModules = Object.freeze({"aghjabadi":"./aghjabadi/aghjabadi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
