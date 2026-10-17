// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bayambang","repository":"asia","path":"philippines/ilocos/bayambang","depth":3,"parent":"philippines/ilocos","children":["nibaliw-sur"]});
export const childModules = Object.freeze({"nibaliw-sur":"./nibaliw-sur/nibaliw-sur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
