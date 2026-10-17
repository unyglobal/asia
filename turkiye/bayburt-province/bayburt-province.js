// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bayburt-province","repository":"asia","path":"turkiye/bayburt-province","depth":2,"parent":"turkiye","children":["bayburt"]});
export const childModules = Object.freeze({"bayburt":"./bayburt/bayburt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
