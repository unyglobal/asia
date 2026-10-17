// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mus","repository":"asia","path":"turkiye/mus","depth":2,"parent":"turkiye","children":["bulan-k","malazgirt","varto"]});
export const childModules = Object.freeze({"bulan-k":"./bulan-k/bulan-k.js","malazgirt":"./malazgirt/malazgirt.js","varto":"./varto/varto.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
