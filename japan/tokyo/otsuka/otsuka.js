// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"otsuka","repository":"asia","path":"japan/tokyo/otsuka","depth":3,"parent":"japan/tokyo","children":["otowa"]});
export const childModules = Object.freeze({"otowa":"./otowa/otowa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
