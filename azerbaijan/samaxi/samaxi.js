// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"samaxi","repository":"asia","path":"azerbaijan/samaxi","depth":2,"parent":"azerbaijan","children":["shamakhi"]});
export const childModules = Object.freeze({"shamakhi":"./shamakhi/shamakhi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
