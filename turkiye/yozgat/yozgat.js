// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yozgat","repository":"asia","path":"turkiye/yozgat","depth":2,"parent":"turkiye","children":["akdagmadeni","sorgun","yerkoy"]});
export const childModules = Object.freeze({"akdagmadeni":"./akdagmadeni/akdagmadeni.js","sorgun":"./sorgun/sorgun.js","yerkoy":"./yerkoy/yerkoy.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
