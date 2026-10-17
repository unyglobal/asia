// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"takeo","repository":"asia","path":"cambodia/takeo","depth":2,"parent":"cambodia","children":["angk-tasaom","kandoeng","phumi-veal-sre","phumi-youl-toung"]});
export const childModules = Object.freeze({"angk-tasaom":"./angk-tasaom/angk-tasaom.js","kandoeng":"./kandoeng/kandoeng.js","phumi-veal-sre":"./phumi-veal-sre/phumi-veal-sre.js","phumi-youl-toung":"./phumi-youl-toung/phumi-youl-toung.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
