// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shiga","repository":"asia","path":"japan/shiga","depth":2,"parent":"japan","children":["echigawa","hikone","kitahama","koka","kusatsu","maibara","minakuchicho-matoba","moriyama","nagahama","omihachiman","otsu","ritto","takashima","yasu","youkaichi"]});
export const childModules = Object.freeze({"echigawa":"./echigawa/echigawa.js","hikone":"./hikone/hikone.js","kitahama":"./kitahama/kitahama.js","koka":"./koka/koka.js","kusatsu":"./kusatsu/kusatsu.js","maibara":"./maibara/maibara.js","minakuchicho-matoba":"./minakuchicho-matoba/minakuchicho-matoba.js","moriyama":"./moriyama/moriyama.js","nagahama":"./nagahama/nagahama.js","omihachiman":"./omihachiman/omihachiman.js","otsu":"./otsu/otsu.js","ritto":"./ritto/ritto.js","takashima":"./takashima/takashima.js","yasu":"./yasu/yasu.js","youkaichi":"./youkaichi/youkaichi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
