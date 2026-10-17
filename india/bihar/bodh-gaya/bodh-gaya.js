// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bodh-gaya","repository":"asia","path":"india/bihar/bodh-gaya","depth":3,"parent":"india/bihar","children":["mastipur"]});
export const childModules = Object.freeze({"mastipur":"./mastipur/mastipur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
