// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nabatieh","repository":"asia","path":"lebanon/nabatieh","depth":2,"parent":"lebanon","children":["habbouch","nabatiye-et-tahta"]});
export const childModules = Object.freeze({"habbouch":"./habbouch/habbouch.js","nabatiye-et-tahta":"./nabatiye-et-tahta/nabatiye-et-tahta.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
