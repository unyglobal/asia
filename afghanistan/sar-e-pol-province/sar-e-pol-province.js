// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sar-e-pol-province","repository":"asia","path":"afghanistan/sar-e-pol-province","depth":2,"parent":"afghanistan","children":["sang-e-charak","sar-e-pul"]});
export const childModules = Object.freeze({"sang-e-charak":"./sang-e-charak/sang-e-charak.js","sar-e-pul":"./sar-e-pul/sar-e-pul.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
