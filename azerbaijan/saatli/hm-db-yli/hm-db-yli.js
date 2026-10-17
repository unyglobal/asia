// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hm-db-yli","repository":"asia","path":"azerbaijan/saatli/hm-db-yli","depth":3,"parent":"azerbaijan/saatli","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
