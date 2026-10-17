// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kampong-thom","repository":"asia","path":"cambodia/kampong-thom","depth":2,"parent":"cambodia","children":["phumi-tnaot"]});
export const childModules = Object.freeze({"phumi-tnaot":"./phumi-tnaot/phumi-tnaot.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
