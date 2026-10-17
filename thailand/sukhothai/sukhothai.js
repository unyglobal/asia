// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sukhothai","repository":"asia","path":"thailand/sukhothai","depth":2,"parent":"thailand","children":["ban-na","sawankhalok","si-satchanalai"]});
export const childModules = Object.freeze({"ban-na":"./ban-na/ban-na.js","sawankhalok":"./sawankhalok/sawankhalok.js","si-satchanalai":"./si-satchanalai/si-satchanalai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
