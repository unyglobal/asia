// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kotdwara","repository":"asia","path":"india/uttarakhand/kotdwara","depth":3,"parent":"india/uttarakhand","children":["jaunpar","kashirampur","sukhrau-malla"]});
export const childModules = Object.freeze({"jaunpar":"./jaunpar/jaunpar.js","kashirampur":"./kashirampur/kashirampur.js","sukhrau-malla":"./sukhrau-malla/sukhrau-malla.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
