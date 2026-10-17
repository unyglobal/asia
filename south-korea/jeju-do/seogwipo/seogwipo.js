// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"seogwipo","repository":"asia","path":"south-korea/jeju-do/seogwipo","depth":3,"parent":"south-korea/jeju-do","children":["cheonjidong","jongbangdong","jungangdong","sohong-dong"]});
export const childModules = Object.freeze({"cheonjidong":"./cheonjidong/cheonjidong.js","jongbangdong":"./jongbangdong/jongbangdong.js","jungangdong":"./jungangdong/jungangdong.js","sohong-dong":"./sohong-dong/sohong-dong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
