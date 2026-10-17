// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"muscat","repository":"asia","path":"oman/muscat","depth":2,"parent":"oman","children":["bawshar","qurayyat","seeb"]});
export const childModules = Object.freeze({"bawshar":"./bawshar/bawshar.js","qurayyat":"./qurayyat/qurayyat.js","seeb":"./seeb/seeb.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
