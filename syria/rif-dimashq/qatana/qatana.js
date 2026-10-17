// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"qatana","repository":"asia","path":"syria/rif-dimashq/qatana","depth":3,"parent":"syria/rif-dimashq","children":["ad-dawrah"]});
export const childModules = Object.freeze({"ad-dawrah":"./ad-dawrah/ad-dawrah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
