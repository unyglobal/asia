// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tonekabon","repository":"asia","path":"iran/mazandaran/tonekabon","depth":3,"parent":"iran/mazandaran","children":["valamerz"]});
export const childModules = Object.freeze({"valamerz":"./valamerz/valamerz.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
