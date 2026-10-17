// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"haciqabul","repository":"asia","path":"azerbaijan/haciqabul","depth":2,"parent":"azerbaijan","children":["hac-qabul"]});
export const childModules = Object.freeze({"hac-qabul":"./hac-qabul/hac-qabul.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
