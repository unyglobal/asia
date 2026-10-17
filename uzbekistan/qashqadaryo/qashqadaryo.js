// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"qashqadaryo","repository":"asia","path":"uzbekistan/qashqadaryo","depth":2,"parent":"uzbekistan","children":["beshkent","chiroqchi","g-uzor","kitob","koson","muborak","qarshi","shahrisabz"]});
export const childModules = Object.freeze({"beshkent":"./beshkent/beshkent.js","chiroqchi":"./chiroqchi/chiroqchi.js","g-uzor":"./g-uzor/g-uzor.js","kitob":"./kitob/kitob.js","koson":"./koson/koson.js","muborak":"./muborak/muborak.js","qarshi":"./qarshi/qarshi.js","shahrisabz":"./shahrisabz/shahrisabz.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
