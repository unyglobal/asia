// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ferdowsiyeh","repository":"asia","path":"iran/tehran/ferdowsiyeh","depth":3,"parent":"iran/tehran","children":["kuy-e-abbasabad","kuy-e-khaveh"]});
export const childModules = Object.freeze({"kuy-e-abbasabad":"./kuy-e-abbasabad/kuy-e-abbasabad.js","kuy-e-khaveh":"./kuy-e-khaveh/kuy-e-khaveh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
