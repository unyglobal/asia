// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"andaman-and-nicobar","repository":"asia","path":"india/andaman-and-nicobar","depth":2,"parent":"india","children":["diglipur","mayabandar","port-blair","rangat"]});
export const childModules = Object.freeze({"diglipur":"./diglipur/diglipur.js","mayabandar":"./mayabandar/mayabandar.js","port-blair":"./port-blair/port-blair.js","rangat":"./rangat/rangat.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
