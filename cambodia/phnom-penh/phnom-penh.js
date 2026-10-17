// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"phnom-penh","repository":"asia","path":"cambodia/phnom-penh","depth":2,"parent":"cambodia","children":["boeng-kak-pir","chrang-chamreh-muoy","dangkao"]});
export const childModules = Object.freeze({"boeng-kak-pir":"./boeng-kak-pir/boeng-kak-pir.js","chrang-chamreh-muoy":"./chrang-chamreh-muoy/chrang-chamreh-muoy.js","dangkao":"./dangkao/dangkao.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
