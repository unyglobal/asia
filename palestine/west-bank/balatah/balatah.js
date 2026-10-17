// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"balatah","repository":"asia","path":"palestine/west-bank/balatah","depth":3,"parent":"palestine/west-bank","children":["ad-dahiyah","iraq-at-tayah"]});
export const childModules = Object.freeze({"ad-dahiyah":"./ad-dahiyah/ad-dahiyah.js","iraq-at-tayah":"./iraq-at-tayah/iraq-at-tayah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
