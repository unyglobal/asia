// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"west-nusa-tenggara","repository":"asia","path":"indonesia/west-nusa-tenggara","depth":2,"parent":"indonesia","children":["bima","dompu","mataram","praya","selong","sumbawa-besar","taliwang"]});
export const childModules = Object.freeze({"bima":"./bima/bima.js","dompu":"./dompu/dompu.js","mataram":"./mataram/mataram.js","praya":"./praya/praya.js","selong":"./selong/selong.js","sumbawa-besar":"./sumbawa-besar/sumbawa-besar.js","taliwang":"./taliwang/taliwang.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
