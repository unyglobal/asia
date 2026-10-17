// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mingora","repository":"asia","path":"pakistan/khyber-pakhtunkhwa/mingora","depth":3,"parent":"pakistan/khyber-pakhtunkhwa","children":["band","malukabad","mohallah-qazi-baba","mohallah-rangmala","shahdra","yousafabad"]});
export const childModules = Object.freeze({"band":"./band/band.js","malukabad":"./malukabad/malukabad.js","mohallah-qazi-baba":"./mohallah-qazi-baba/mohallah-qazi-baba.js","mohallah-rangmala":"./mohallah-rangmala/mohallah-rangmala.js","shahdra":"./shahdra/shahdra.js","yousafabad":"./yousafabad/yousafabad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
