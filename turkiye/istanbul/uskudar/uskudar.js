// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"uskudar","repository":"asia","path":"turkiye/istanbul/uskudar","depth":3,"parent":"turkiye/istanbul","children":["doganc-lar","ihsaniye","kefcedede","salacak","semispasa","uskudar-old-town"]});
export const childModules = Object.freeze({"doganc-lar":"./doganc-lar/doganc-lar.js","ihsaniye":"./ihsaniye/ihsaniye.js","kefcedede":"./kefcedede/kefcedede.js","salacak":"./salacak/salacak.js","semispasa":"./semispasa/semispasa.js","uskudar-old-town":"./uskudar-old-town/uskudar-old-town.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
