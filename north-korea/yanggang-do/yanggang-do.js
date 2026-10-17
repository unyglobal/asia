// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yanggang-do","repository":"asia","path":"north-korea/yanggang-do","depth":2,"parent":"north-korea","children":["hyesan","hyesan-dong","kapsan-up","samjiyon-up"]});
export const childModules = Object.freeze({"hyesan":"./hyesan/hyesan.js","hyesan-dong":"./hyesan-dong/hyesan-dong.js","kapsan-up":"./kapsan-up/kapsan-up.js","samjiyon-up":"./samjiyon-up/samjiyon-up.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
