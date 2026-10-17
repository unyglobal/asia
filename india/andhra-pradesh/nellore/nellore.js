// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nellore","repository":"asia","path":"india/andhra-pradesh/nellore","depth":3,"parent":"india/andhra-pradesh","children":["balaji-nagar","subahdarpeta"]});
export const childModules = Object.freeze({"balaji-nagar":"./balaji-nagar/balaji-nagar.js","subahdarpeta":"./subahdarpeta/subahdarpeta.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
