// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sabirabad-district","repository":"asia","path":"azerbaijan/sabirabad-district","depth":2,"parent":"azerbaijan","children":["sabirabad"]});
export const childModules = Object.freeze({"sabirabad":"./sabirabad/sabirabad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
