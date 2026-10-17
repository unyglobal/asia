// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"xorazm-region","repository":"asia","path":"uzbekistan/xorazm-region","depth":2,"parent":"uzbekistan","children":["druzhba","gurlan","hazorasp","qo-shko-pir","shovot","urganch","xiva"]});
export const childModules = Object.freeze({"druzhba":"./druzhba/druzhba.js","gurlan":"./gurlan/gurlan.js","hazorasp":"./hazorasp/hazorasp.js","qo-shko-pir":"./qo-shko-pir/qo-shko-pir.js","shovot":"./shovot/shovot.js","urganch":"./urganch/urganch.js","xiva":"./xiva/xiva.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
