// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sakata","repository":"asia","path":"japan/yamagata/sakata","depth":3,"parent":"japan/yamagata","children":["hamada"]});
export const childModules = Object.freeze({"hamada":"./hamada/hamada.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
