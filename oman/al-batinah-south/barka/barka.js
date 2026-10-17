// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"barka","repository":"asia","path":"oman/al-batinah-south/barka","depth":3,"parent":"oman/al-batinah-south","children":["hayy-as-salam"]});
export const childModules = Object.freeze({"hayy-as-salam":"./hayy-as-salam/hayy-as-salam.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
