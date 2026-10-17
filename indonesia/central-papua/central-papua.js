// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"central-papua","repository":"asia","path":"indonesia/central-papua","depth":2,"parent":"indonesia","children":["mulia","nabire","timika"]});
export const childModules = Object.freeze({"mulia":"./mulia/mulia.js","nabire":"./nabire/nabire.js","timika":"./timika/timika.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
