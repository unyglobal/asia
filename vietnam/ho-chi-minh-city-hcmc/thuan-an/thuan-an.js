// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"thuan-an","repository":"asia","path":"vietnam/ho-chi-minh-city-hcmc/thuan-an","depth":3,"parent":"vietnam/ho-chi-minh-city-hcmc","children":["ap-ba","ap-mot"]});
export const childModules = Object.freeze({"ap-ba":"./ap-ba/ap-ba.js","ap-mot":"./ap-mot/ap-mot.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
