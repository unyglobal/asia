// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"west-kazakhstan","repository":"asia","path":"kazakhstan/west-kazakhstan","depth":2,"parent":"kazakhstan","children":["aqsay","oral"]});
export const childModules = Object.freeze({"aqsay":"./aqsay/aqsay.js","oral":"./oral/oral.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
