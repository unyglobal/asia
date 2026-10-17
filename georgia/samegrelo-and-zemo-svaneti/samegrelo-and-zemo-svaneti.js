// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"samegrelo-and-zemo-svaneti","repository":"asia","path":"georgia/samegrelo-and-zemo-svaneti","depth":2,"parent":"georgia","children":["poti","zugdidi"]});
export const childModules = Object.freeze({"poti":"./poti/poti.js","zugdidi":"./zugdidi/zugdidi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
