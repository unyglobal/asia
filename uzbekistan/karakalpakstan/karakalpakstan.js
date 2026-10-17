// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"karakalpakstan","repository":"asia","path":"uzbekistan/karakalpakstan","depth":2,"parent":"uzbekistan","children":["beruniy","manghit","novyy-turtkul","nukus","oltinko-l","qunghirot","xo-jayli-shahri"]});
export const childModules = Object.freeze({"beruniy":"./beruniy/beruniy.js","manghit":"./manghit/manghit.js","novyy-turtkul":"./novyy-turtkul/novyy-turtkul.js","nukus":"./nukus/nukus.js","oltinko-l":"./oltinko-l/oltinko-l.js","qunghirot":"./qunghirot/qunghirot.js","xo-jayli-shahri":"./xo-jayli-shahri/xo-jayli-shahri.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
