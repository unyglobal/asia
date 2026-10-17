// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ayodhya","repository":"asia","path":"india/uttar-pradesh/ayodhya","depth":3,"parent":"india/uttar-pradesh","children":["begampura","miranpur-duaba"]});
export const childModules = Object.freeze({"begampura":"./begampura/begampura.js","miranpur-duaba":"./miranpur-duaba/miranpur-duaba.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
