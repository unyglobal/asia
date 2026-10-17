// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bayankhongor","repository":"asia","path":"mongolia/bayankhongor","depth":2,"parent":"mongolia","children":["bayanhongor"]});
export const childModules = Object.freeze({"bayanhongor":"./bayanhongor/bayanhongor.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
