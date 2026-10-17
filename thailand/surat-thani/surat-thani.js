// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"surat-thani","repository":"asia","path":"thailand/surat-thani","depth":2,"parent":"thailand","children":["ban-na-san","ko-samui","tha-kham"]});
export const childModules = Object.freeze({"ban-na-san":"./ban-na-san/ban-na-san.js","ko-samui":"./ko-samui/ko-samui.js","tha-kham":"./tha-kham/tha-kham.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
