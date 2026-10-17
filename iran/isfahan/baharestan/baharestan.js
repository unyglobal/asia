// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"baharestan","repository":"asia","path":"iran/isfahan/baharestan","depth":3,"parent":"iran/isfahan","children":["mahal-e-sarvestan"]});
export const childModules = Object.freeze({"mahal-e-sarvestan":"./mahal-e-sarvestan/mahal-e-sarvestan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
