// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gandaki-pradesh","repository":"asia","path":"nepal/gandaki-pradesh","depth":2,"parent":"nepal","children":["baglun","pokhara","walin"]});
export const childModules = Object.freeze({"baglun":"./baglun/baglun.js","pokhara":"./pokhara/pokhara.js","walin":"./walin/walin.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
