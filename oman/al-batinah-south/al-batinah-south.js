// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-batinah-south","repository":"asia","path":"oman/al-batinah-south","depth":2,"parent":"oman","children":["barka","rustaq"]});
export const childModules = Object.freeze({"barka":"./barka/barka.js","rustaq":"./rustaq/rustaq.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
