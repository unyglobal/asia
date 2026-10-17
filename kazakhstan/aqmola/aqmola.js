// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aqmola","repository":"asia","path":"kazakhstan/aqmola","depth":2,"parent":"kazakhstan","children":["akkol","atbasar","kokshetau","makinsk","shchuchinsk","stepnogorsk"]});
export const childModules = Object.freeze({"akkol":"./akkol/akkol.js","atbasar":"./atbasar/atbasar.js","kokshetau":"./kokshetau/kokshetau.js","makinsk":"./makinsk/makinsk.js","shchuchinsk":"./shchuchinsk/shchuchinsk.js","stepnogorsk":"./stepnogorsk/stepnogorsk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
