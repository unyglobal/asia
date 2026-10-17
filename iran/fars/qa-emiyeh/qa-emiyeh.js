// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"qa-emiyeh","repository":"asia","path":"iran/fars/qa-emiyeh","depth":3,"parent":"iran/fars","children":["kuh-piri","naderabad","owlad-mirza-i"]});
export const childModules = Object.freeze({"kuh-piri":"./kuh-piri/kuh-piri.js","naderabad":"./naderabad/naderabad.js","owlad-mirza-i":"./owlad-mirza-i/owlad-mirza-i.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
