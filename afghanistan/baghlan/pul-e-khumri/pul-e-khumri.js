// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pul-e-khumri","repository":"asia","path":"afghanistan/baghlan/pul-e-khumri","depth":3,"parent":"afghanistan/baghlan","children":["khanahha-ye-layn-e-khanabad","qishlaq-e-tapah-ye-band-e-barq"]});
export const childModules = Object.freeze({"khanahha-ye-layn-e-khanabad":"./khanahha-ye-layn-e-khanabad/khanahha-ye-layn-e-khanabad.js","qishlaq-e-tapah-ye-band-e-barq":"./qishlaq-e-tapah-ye-band-e-barq/qishlaq-e-tapah-ye-band-e-barq.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
