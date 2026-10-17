// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"galugah","repository":"asia","path":"iran/mazandaran/galugah","depth":3,"parent":"iran/mazandaran","children":["meydan-e-golestan"]});
export const childModules = Object.freeze({"meydan-e-golestan":"./meydan-e-golestan/meydan-e-golestan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
