// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kobe","repository":"asia","path":"japan/hyogo/kobe","depth":3,"parent":"japan/hyogo","children":["kitanagasadori","kusunokicho","nakayamatedori","sakaemachidori","sannomiyacho","yamamotodori"]});
export const childModules = Object.freeze({"kitanagasadori":"./kitanagasadori/kitanagasadori.js","kusunokicho":"./kusunokicho/kusunokicho.js","nakayamatedori":"./nakayamatedori/nakayamatedori.js","sakaemachidori":"./sakaemachidori/sakaemachidori.js","sannomiyacho":"./sannomiyacho/sannomiyacho.js","yamamotodori":"./yamamotodori/yamamotodori.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
