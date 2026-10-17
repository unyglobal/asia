// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bani-yas-city","repository":"asia","path":"united-arab-emirates/abu-dhabi/bani-yas-city","depth":3,"parent":"united-arab-emirates/abu-dhabi","children":["eb2-03","eb2-04","eb2-05","eb2-06"]});
export const childModules = Object.freeze({"eb2-03":"./eb2-03/eb2-03.js","eb2-04":"./eb2-04/eb2-04.js","eb2-05":"./eb2-05/eb2-05.js","eb2-06":"./eb2-06/eb2-06.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
