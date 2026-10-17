// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sarvestan","repository":"asia","path":"iran/fars/sarvestan","depth":3,"parent":"iran/fars","children":["ebrahim-khani","mahalleh-ye-tezang","shahrak-e-qods","sheykh-yusef"]});
export const childModules = Object.freeze({"ebrahim-khani":"./ebrahim-khani/ebrahim-khani.js","mahalleh-ye-tezang":"./mahalleh-ye-tezang/mahalleh-ye-tezang.js","shahrak-e-qods":"./shahrak-e-qods/shahrak-e-qods.js","sheykh-yusef":"./sheykh-yusef/sheykh-yusef.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
