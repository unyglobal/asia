// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"calauan","repository":"asia","path":"philippines/calabarzon/calauan","depth":3,"parent":"philippines/calabarzon","children":["kanluran","san-isidro"]});
export const childModules = Object.freeze({"kanluran":"./kanluran/kanluran.js","san-isidro":"./san-isidro/san-isidro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
