// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kochi","repository":"asia","path":"japan/kochi","depth":2,"parent":"japan","children":["aki","ino","muroto-misakicho","nakamura","nankoku","sukumo","susaki","tosa","tosayamadacho-nakano","yamashita"]});
export const childModules = Object.freeze({"aki":"./aki/aki.js","ino":"./ino/ino.js","muroto-misakicho":"./muroto-misakicho/muroto-misakicho.js","nakamura":"./nakamura/nakamura.js","nankoku":"./nankoku/nankoku.js","sukumo":"./sukumo/sukumo.js","susaki":"./susaki/susaki.js","tosa":"./tosa/tosa.js","tosayamadacho-nakano":"./tosayamadacho-nakano/tosayamadacho-nakano.js","yamashita":"./yamashita/yamashita.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
