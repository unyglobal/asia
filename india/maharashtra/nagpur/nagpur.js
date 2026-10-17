// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nagpur","repository":"asia","path":"india/maharashtra/nagpur","depth":3,"parent":"india/maharashtra","children":["sangam","sitabard","somwari-bazar","vidhan-sabha"]});
export const childModules = Object.freeze({"sangam":"./sangam/sangam.js","sitabard":"./sitabard/sitabard.js","somwari-bazar":"./somwari-bazar/somwari-bazar.js","vidhan-sabha":"./vidhan-sabha/vidhan-sabha.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
