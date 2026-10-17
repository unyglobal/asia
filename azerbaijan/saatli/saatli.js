// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saatli","repository":"asia","path":"azerbaijan/saatli","depth":2,"parent":"azerbaijan","children":["hm-db-yli","saatl"]});
export const childModules = Object.freeze({"hm-db-yli":"./hm-db-yli/hm-db-yli.js","saatl":"./saatl/saatl.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
