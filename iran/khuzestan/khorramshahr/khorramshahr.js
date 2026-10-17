// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"khorramshahr","repository":"asia","path":"iran/khuzestan/khorramshahr","depth":3,"parent":"iran/khuzestan","children":["kuy-e-dureh","kuy-e-hashemi","kuy-e-taleqani"]});
export const childModules = Object.freeze({"kuy-e-dureh":"./kuy-e-dureh/kuy-e-dureh.js","kuy-e-hashemi":"./kuy-e-hashemi/kuy-e-hashemi.js","kuy-e-taleqani":"./kuy-e-taleqani/kuy-e-taleqani.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
