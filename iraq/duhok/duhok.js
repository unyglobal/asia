// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"duhok","repository":"asia","path":"iraq/duhok","depth":2,"parent":"iraq","children":["batifa","dereluk-devera-niheliya","dihok","sheladiz","simele","sinah","sumayl","zaxo"]});
export const childModules = Object.freeze({"batifa":"./batifa/batifa.js","dereluk-devera-niheliya":"./dereluk-devera-niheliya/dereluk-devera-niheliya.js","dihok":"./dihok/dihok.js","sheladiz":"./sheladiz/sheladiz.js","simele":"./simele/simele.js","sinah":"./sinah/sinah.js","sumayl":"./sumayl/sumayl.js","zaxo":"./zaxo/zaxo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
