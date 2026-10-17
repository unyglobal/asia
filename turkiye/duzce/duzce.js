// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"duzce","repository":"asia","path":"turkiye/duzce","depth":2,"parent":"turkiye","children":["akcakoca","kaynasl"]});
export const childModules = Object.freeze({"akcakoca":"./akcakoca/akcakoca.js","kaynasl":"./kaynasl/kaynasl.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
