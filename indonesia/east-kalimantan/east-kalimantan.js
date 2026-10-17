// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"east-kalimantan","repository":"asia","path":"indonesia/east-kalimantan","depth":2,"parent":"indonesia","children":["balikpapan","bontang","loa-janan","nusantara","samarinda"]});
export const childModules = Object.freeze({"balikpapan":"./balikpapan/balikpapan.js","bontang":"./bontang/bontang.js","loa-janan":"./loa-janan/loa-janan.js","nusantara":"./nusantara/nusantara.js","samarinda":"./samarinda/samarinda.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
