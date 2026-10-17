// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"brunei-muara-district","repository":"asia","path":"brunei/brunei-muara-district","depth":2,"parent":"brunei","children":["bandar-seri-begawan","mentiri","sengkurong","serasa"]});
export const childModules = Object.freeze({"bandar-seri-begawan":"./bandar-seri-begawan/bandar-seri-begawan.js","mentiri":"./mentiri/mentiri.js","sengkurong":"./sengkurong/sengkurong.js","serasa":"./serasa/serasa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
