// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sirjan","repository":"asia","path":"iran/kerman/sirjan","depth":3,"parent":"iran/kerman","children":["kuy-e-peykan","mohiashahr"]});
export const childModules = Object.freeze({"kuy-e-peykan":"./kuy-e-peykan/kuy-e-peykan.js","mohiashahr":"./mohiashahr/mohiashahr.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
