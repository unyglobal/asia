// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kupang","repository":"asia","path":"indonesia/east-nusa-tenggara/kupang","depth":3,"parent":"indonesia/east-nusa-tenggara","children":["lingkungan-oebobo-satu","lingkungan-oebobo-tiga","linkungan-naikoten-dua-satu"]});
export const childModules = Object.freeze({"lingkungan-oebobo-satu":"./lingkungan-oebobo-satu/lingkungan-oebobo-satu.js","lingkungan-oebobo-tiga":"./lingkungan-oebobo-tiga/lingkungan-oebobo-tiga.js","linkungan-naikoten-dua-satu":"./linkungan-naikoten-dua-satu/linkungan-naikoten-dua-satu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
