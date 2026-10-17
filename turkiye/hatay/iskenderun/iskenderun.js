// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"iskenderun","repository":"asia","path":"turkiye/hatay/iskenderun","depth":3,"parent":"turkiye/hatay","children":["dumlup-nar","kurtulus","yenisehir"]});
export const childModules = Object.freeze({"dumlup-nar":"./dumlup-nar/dumlup-nar.js","kurtulus":"./kurtulus/kurtulus.js","yenisehir":"./yenisehir/yenisehir.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
