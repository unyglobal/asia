// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tajikistan","repository":"asia","path":"tajikistan","depth":1,"parent":"","children":["dushanbe","gorno-badakhshan","khatlon-province","republican-subordination","sughd"]});
export const childModules = Object.freeze({"dushanbe":"./dushanbe/dushanbe.js","gorno-badakhshan":"./gorno-badakhshan/gorno-badakhshan.js","khatlon-province":"./khatlon-province/khatlon-province.js","republican-subordination":"./republican-subordination/republican-subordination.js","sughd":"./sughd/sughd.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
