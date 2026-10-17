// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lequn","repository":"asia","path":"china/guangdong/lequn","depth":3,"parent":"china/guangdong","children":["gongle-gongye"]});
export const childModules = Object.freeze({"gongle-gongye":"./gongle-gongye/gongle-gongye.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
