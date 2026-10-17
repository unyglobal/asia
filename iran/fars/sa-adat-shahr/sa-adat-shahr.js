// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sa-adat-shahr","repository":"asia","path":"iran/fars/sa-adat-shahr","depth":3,"parent":"iran/fars","children":["mahalleh-ye-qal-eh-ye-qadim","mahalleh-ye-serajabad","shahrak-e-enqelab","shahrak-e-fatemiyeh"]});
export const childModules = Object.freeze({"mahalleh-ye-qal-eh-ye-qadim":"./mahalleh-ye-qal-eh-ye-qadim/mahalleh-ye-qal-eh-ye-qadim.js","mahalleh-ye-serajabad":"./mahalleh-ye-serajabad/mahalleh-ye-serajabad.js","shahrak-e-enqelab":"./shahrak-e-enqelab/shahrak-e-enqelab.js","shahrak-e-fatemiyeh":"./shahrak-e-fatemiyeh/shahrak-e-fatemiyeh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
