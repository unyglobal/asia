// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sahnaya","repository":"asia","path":"syria/rif-dimashq/sahnaya","depth":3,"parent":"syria/rif-dimashq","children":["as-salm"]});
export const childModules = Object.freeze({"as-salm":"./as-salm/as-salm.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
