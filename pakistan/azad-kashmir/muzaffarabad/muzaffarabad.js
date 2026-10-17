// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"muzaffarabad","repository":"asia","path":"pakistan/azad-kashmir/muzaffarabad","depth":3,"parent":"pakistan/azad-kashmir","children":["babu-muhallah","balapir","khawaja-muhallah","moori","shah-nara","shaukat-lines","syedan-di-dheri","tariqabad","upper-plat"]});
export const childModules = Object.freeze({"babu-muhallah":"./babu-muhallah/babu-muhallah.js","balapir":"./balapir/balapir.js","khawaja-muhallah":"./khawaja-muhallah/khawaja-muhallah.js","moori":"./moori/moori.js","shah-nara":"./shah-nara/shah-nara.js","shaukat-lines":"./shaukat-lines/shaukat-lines.js","syedan-di-dheri":"./syedan-di-dheri/syedan-di-dheri.js","tariqabad":"./tariqabad/tariqabad.js","upper-plat":"./upper-plat/upper-plat.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
