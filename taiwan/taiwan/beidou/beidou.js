// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"beidou","repository":"asia","path":"taiwan/taiwan/beidou","depth":3,"parent":"taiwan/taiwan","children":["beidouxinshizhen"]});
export const childModules = Object.freeze({"beidouxinshizhen":"./beidouxinshizhen/beidouxinshizhen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
