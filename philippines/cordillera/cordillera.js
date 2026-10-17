// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cordillera","repository":"asia","path":"philippines/cordillera","depth":2,"parent":"philippines","children":["baguio","bangued","bontoc","itogon","la-trinidad","lagawe","mankayan","tabuk"]});
export const childModules = Object.freeze({"baguio":"./baguio/baguio.js","bangued":"./bangued/bangued.js","bontoc":"./bontoc/bontoc.js","itogon":"./itogon/itogon.js","la-trinidad":"./la-trinidad/la-trinidad.js","lagawe":"./lagawe/lagawe.js","mankayan":"./mankayan/mankayan.js","tabuk":"./tabuk/tabuk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
