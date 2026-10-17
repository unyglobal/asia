// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"model-town","repository":"asia","path":"pakistan/punjab/model-town","depth":3,"parent":"pakistan/punjab","children":["janbaz-force"]});
export const childModules = Object.freeze({"janbaz-force":"./janbaz-force/janbaz-force.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
