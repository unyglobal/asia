// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"suhbaatar","repository":"asia","path":"mongolia/selenge-province/suhbaatar","depth":3,"parent":"mongolia/selenge-province","children":["baruun-urt"]});
export const childModules = Object.freeze({"baruun-urt":"./baruun-urt/baruun-urt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
