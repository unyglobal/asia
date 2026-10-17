// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"otawara","repository":"asia","path":"japan/tochigi/otawara","depth":3,"parent":"japan/tochigi","children":["chuo","motomachi","shintomicho","shiroyama","yamanote"]});
export const childModules = Object.freeze({"chuo":"./chuo/chuo.js","motomachi":"./motomachi/motomachi.js","shintomicho":"./shintomicho/shintomicho.js","shiroyama":"./shiroyama/shiroyama.js","yamanote":"./yamanote/yamanote.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
