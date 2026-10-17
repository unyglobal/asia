// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sanandaj","repository":"asia","path":"iran/kurdistan-province/sanandaj","depth":3,"parent":"iran/kurdistan-province","children":["aghazman","hasanabad","sar-tapowleh","tazehabad"]});
export const childModules = Object.freeze({"aghazman":"./aghazman/aghazman.js","hasanabad":"./hasanabad/hasanabad.js","sar-tapowleh":"./sar-tapowleh/sar-tapowleh.js","tazehabad":"./tazehabad/tazehabad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
