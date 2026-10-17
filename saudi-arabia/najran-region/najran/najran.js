// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"najran","repository":"asia","path":"saudi-arabia/najran-region/najran","depth":3,"parent":"saudi-arabia/najran-region","children":["bani-salman","mukhattat-sha-b-hasna"]});
export const childModules = Object.freeze({"bani-salman":"./bani-salman/bani-salman.js","mukhattat-sha-b-hasna":"./mukhattat-sha-b-hasna/mukhattat-sha-b-hasna.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
