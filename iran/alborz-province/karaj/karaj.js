// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"karaj","repository":"asia","path":"iran/alborz-province/karaj","depth":3,"parent":"iran/alborz-province","children":["jahan-shahr"]});
export const childModules = Object.freeze({"jahan-shahr":"./jahan-shahr/jahan-shahr.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
