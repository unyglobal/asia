// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gorakhpur","repository":"asia","path":"india/uttar-pradesh/gorakhpur","depth":3,"parent":"india/uttar-pradesh","children":["dharamsala","hazaripur"]});
export const childModules = Object.freeze({"dharamsala":"./dharamsala/dharamsala.js","hazaripur":"./hazaripur/hazaripur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
