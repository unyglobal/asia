// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kheri","repository":"asia","path":"india/uttar-pradesh/kheri","depth":3,"parent":"india/uttar-pradesh","children":["arni-khana","kunwarpur","patti-bijai","patti-jaidrath"]});
export const childModules = Object.freeze({"arni-khana":"./arni-khana/arni-khana.js","kunwarpur":"./kunwarpur/kunwarpur.js","patti-bijai":"./patti-bijai/patti-bijai.js","patti-jaidrath":"./patti-jaidrath/patti-jaidrath.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
