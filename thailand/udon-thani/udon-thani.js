// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"udon-thani","repository":"asia","path":"thailand/udon-thani","depth":2,"parent":"thailand","children":["ban-dung","ban-nong-wua-so","ban-phan-don","kut-chap","nam-som"]});
export const childModules = Object.freeze({"ban-dung":"./ban-dung/ban-dung.js","ban-nong-wua-so":"./ban-nong-wua-so/ban-nong-wua-so.js","ban-phan-don":"./ban-phan-don/ban-phan-don.js","kut-chap":"./kut-chap/kut-chap.js","nam-som":"./nam-som/nam-som.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
