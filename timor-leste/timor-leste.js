// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"timor-leste","repository":"asia","path":"timor-leste","depth":1,"parent":"","children":["aileu","baucau","bobonaro","cova-lima","dili-municipality","ermera","lautem","liquica"]});
export const childModules = Object.freeze({"aileu":"./aileu/aileu.js","baucau":"./baucau/baucau.js","bobonaro":"./bobonaro/bobonaro.js","cova-lima":"./cova-lima/cova-lima.js","dili-municipality":"./dili-municipality/dili-municipality.js","ermera":"./ermera/ermera.js","lautem":"./lautem/lautem.js","liquica":"./liquica/liquica.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
