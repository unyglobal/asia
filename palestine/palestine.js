// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"palestine","repository":"asia","path":"palestine","depth":1,"parent":"","children":["gaza-strip","west-bank"]});
export const childModules = Object.freeze({"gaza-strip":"./gaza-strip/gaza-strip.js","west-bank":"./west-bank/west-bank.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
