// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"papua","repository":"asia","path":"indonesia/papua","depth":2,"parent":"indonesia","children":["abepura","biak","fakfak","jayapura","sentani"]});
export const childModules = Object.freeze({"abepura":"./abepura/abepura.js","biak":"./biak/biak.js","fakfak":"./fakfak/fakfak.js","jayapura":"./jayapura/jayapura.js","sentani":"./sentani/sentani.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
