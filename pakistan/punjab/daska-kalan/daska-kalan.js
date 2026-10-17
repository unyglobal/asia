// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"daska-kalan","repository":"asia","path":"pakistan/punjab/daska-kalan","depth":3,"parent":"pakistan/punjab","children":["johar-town","mian-fazal-colony"]});
export const childModules = Object.freeze({"johar-town":"./johar-town/johar-town.js","mian-fazal-colony":"./mian-fazal-colony/mian-fazal-colony.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
