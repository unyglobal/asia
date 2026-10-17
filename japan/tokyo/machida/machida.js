// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"machida","repository":"asia","path":"japan/tokyo/machida","depth":3,"parent":"japan/tokyo","children":["haramachida"]});
export const childModules = Object.freeze({"haramachida":"./haramachida/haramachida.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
