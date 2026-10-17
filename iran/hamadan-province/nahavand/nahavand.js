// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nahavand","repository":"asia","path":"iran/hamadan-province/nahavand","depth":3,"parent":"iran/hamadan-province","children":["kuy-e-hajjian","mahalleh-ye-do-khvaharan","mahalleh-ye-golshan","mahdiyeh","shahrak-e-doktor-hesabi"]});
export const childModules = Object.freeze({"kuy-e-hajjian":"./kuy-e-hajjian/kuy-e-hajjian.js","mahalleh-ye-do-khvaharan":"./mahalleh-ye-do-khvaharan/mahalleh-ye-do-khvaharan.js","mahalleh-ye-golshan":"./mahalleh-ye-golshan/mahalleh-ye-golshan.js","mahdiyeh":"./mahdiyeh/mahdiyeh.js","shahrak-e-doktor-hesabi":"./shahrak-e-doktor-hesabi/shahrak-e-doktor-hesabi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
