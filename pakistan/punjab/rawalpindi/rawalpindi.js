// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rawalpindi","repository":"asia","path":"pakistan/punjab/rawalpindi","depth":3,"parent":"pakistan/punjab","children":["marir-hassan","palmer-lines","ra-bazar","sadar","t-and-t-colony"]});
export const childModules = Object.freeze({"marir-hassan":"./marir-hassan/marir-hassan.js","palmer-lines":"./palmer-lines/palmer-lines.js","ra-bazar":"./ra-bazar/ra-bazar.js","sadar":"./sadar/sadar.js","t-and-t-colony":"./t-and-t-colony/t-and-t-colony.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
