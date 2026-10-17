// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nargund","repository":"asia","path":"india/karnataka/nargund","depth":3,"parent":"india/karnataka","children":["arban","dandapur","petha","somapur"]});
export const childModules = Object.freeze({"arban":"./arban/arban.js","dandapur":"./dandapur/dandapur.js","petha":"./petha/petha.js","somapur":"./somapur/somapur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
