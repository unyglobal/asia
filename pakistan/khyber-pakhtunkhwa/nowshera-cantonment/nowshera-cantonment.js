// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nowshera-cantonment","repository":"asia","path":"pakistan/khyber-pakhtunkhwa/nowshera-cantonment","depth":3,"parent":"pakistan/khyber-pakhtunkhwa","children":["lockhart-lines","lockhart-lines-east","munro-lines"]});
export const childModules = Object.freeze({"lockhart-lines":"./lockhart-lines/lockhart-lines.js","lockhart-lines-east":"./lockhart-lines-east/lockhart-lines-east.js","munro-lines":"./munro-lines/munro-lines.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
