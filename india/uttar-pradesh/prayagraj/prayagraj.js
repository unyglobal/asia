// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"prayagraj","repository":"asia","path":"india/uttar-pradesh/prayagraj","depth":3,"parent":"india/uttar-pradesh","children":["malviyanagar","rambagh"]});
export const childModules = Object.freeze({"malviyanagar":"./malviyanagar/malviyanagar.js","rambagh":"./rambagh/rambagh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
