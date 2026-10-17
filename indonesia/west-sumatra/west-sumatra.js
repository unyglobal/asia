// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"west-sumatra","repository":"asia","path":"indonesia/west-sumatra","depth":2,"parent":"indonesia","children":["bukittinggi","padang","padangpanjang","pariaman","payakumbuh","sijunjung","solok"]});
export const childModules = Object.freeze({"bukittinggi":"./bukittinggi/bukittinggi.js","padang":"./padang/padang.js","padangpanjang":"./padangpanjang/padangpanjang.js","pariaman":"./pariaman/pariaman.js","payakumbuh":"./payakumbuh/payakumbuh.js","sijunjung":"./sijunjung/sijunjung.js","solok":"./solok/solok.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
