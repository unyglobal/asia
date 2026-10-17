// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shush","repository":"asia","path":"iran/khuzestan/shush","depth":3,"parent":"iran/khuzestan","children":["shahr-e-shahi"]});
export const childModules = Object.freeze({"shahr-e-shahi":"./shahr-e-shahi/shahr-e-shahi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
