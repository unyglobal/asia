// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"surxondaryo-region","repository":"asia","path":"uzbekistan/surxondaryo-region","depth":2,"parent":"uzbekistan","children":["boysun","denov","sho-rchi","tirmiz"]});
export const childModules = Object.freeze({"boysun":"./boysun/boysun.js","denov":"./denov/denov.js","sho-rchi":"./sho-rchi/sho-rchi.js","tirmiz":"./tirmiz/tirmiz.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
