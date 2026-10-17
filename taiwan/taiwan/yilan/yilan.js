// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yilan","repository":"asia","path":"taiwan/taiwan/yilan","depth":3,"parent":"taiwan/taiwan","children":["jinliujie"]});
export const childModules = Object.freeze({"jinliujie":"./jinliujie/jinliujie.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
