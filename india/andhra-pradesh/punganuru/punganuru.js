// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"punganuru","repository":"asia","path":"india/andhra-pradesh/punganuru","depth":3,"parent":"india/andhra-pradesh","children":["madigavanipalle","tatimakulapalem"]});
export const childModules = Object.freeze({"madigavanipalle":"./madigavanipalle/madigavanipalle.js","tatimakulapalem":"./tatimakulapalem/tatimakulapalem.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
