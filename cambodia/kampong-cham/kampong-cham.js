// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kampong-cham","repository":"asia","path":"cambodia/kampong-cham","depth":2,"parent":"cambodia","children":["phumi-ampil-leu"]});
export const childModules = Object.freeze({"phumi-ampil-leu":"./phumi-ampil-leu/phumi-ampil-leu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
