// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ghaziabad","repository":"asia","path":"india/uttar-pradesh/ghaziabad","depth":3,"parent":"india/uttar-pradesh","children":["ashoknagar","jatwara","subhashnagar"]});
export const childModules = Object.freeze({"ashoknagar":"./ashoknagar/ashoknagar.js","jatwara":"./jatwara/jatwara.js","subhashnagar":"./subhashnagar/subhashnagar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
