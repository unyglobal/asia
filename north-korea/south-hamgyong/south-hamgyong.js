// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-hamgyong","repository":"asia","path":"north-korea/south-hamgyong","depth":2,"parent":"north-korea","children":["changam-ch-on","hamhung","hongwon","hungnam","iwon-up","kowon-up","samho-rodongjagu","sinp-o","yonggwang-up","yuktae-dong"]});
export const childModules = Object.freeze({"changam-ch-on":"./changam-ch-on/changam-ch-on.js","hamhung":"./hamhung/hamhung.js","hongwon":"./hongwon/hongwon.js","hungnam":"./hungnam/hungnam.js","iwon-up":"./iwon-up/iwon-up.js","kowon-up":"./kowon-up/kowon-up.js","samho-rodongjagu":"./samho-rodongjagu/samho-rodongjagu.js","sinp-o":"./sinp-o/sinp-o.js","yonggwang-up":"./yonggwang-up/yonggwang-up.js","yuktae-dong":"./yuktae-dong/yuktae-dong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
