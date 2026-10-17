// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"erbil","repository":"asia","path":"iraq/erbil","depth":2,"parent":"iraq","children":["baharkah","harir","khalifan","khasnahzan","koysinceq","pirmam","ruwandiz","shaqlawah","soran","xebat"]});
export const childModules = Object.freeze({"baharkah":"./baharkah/baharkah.js","harir":"./harir/harir.js","khalifan":"./khalifan/khalifan.js","khasnahzan":"./khasnahzan/khasnahzan.js","koysinceq":"./koysinceq/koysinceq.js","pirmam":"./pirmam/pirmam.js","ruwandiz":"./ruwandiz/ruwandiz.js","shaqlawah":"./shaqlawah/shaqlawah.js","soran":"./soran/soran.js","xebat":"./xebat/xebat.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
