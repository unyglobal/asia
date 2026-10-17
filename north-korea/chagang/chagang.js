// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chagang","repository":"asia","path":"north-korea/chagang","depth":2,"parent":"north-korea","children":["chunggang","kanggye","kop-ung","manp-o","sijung","songwon","songwon-up","yoch-im-dong"]});
export const childModules = Object.freeze({"chunggang":"./chunggang/chunggang.js","kanggye":"./kanggye/kanggye.js","kop-ung":"./kop-ung/kop-ung.js","manp-o":"./manp-o/manp-o.js","sijung":"./sijung/sijung.js","songwon":"./songwon/songwon.js","songwon-up":"./songwon-up/songwon-up.js","yoch-im-dong":"./yoch-im-dong/yoch-im-dong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
