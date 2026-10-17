// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"central-province","repository":"asia","path":"sri-lanka/central-province","depth":2,"parent":"sri-lanka","children":["dambulla","gampola","hatton","kandy","matale","nuwara-eliya"]});
export const childModules = Object.freeze({"dambulla":"./dambulla/dambulla.js","gampola":"./gampola/gampola.js","hatton":"./hatton/hatton.js","kandy":"./kandy/kandy.js","matale":"./matale/matale.js","nuwara-eliya":"./nuwara-eliya/nuwara-eliya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
