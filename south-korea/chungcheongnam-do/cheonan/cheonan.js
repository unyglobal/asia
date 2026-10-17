// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cheonan","repository":"asia","path":"south-korea/chungcheongnam-do/cheonan","depth":3,"parent":"south-korea/chungcheongnam-do","children":["chungang-dong","munsong-dong","wonsongi-dong","wonsongil-tong"]});
export const childModules = Object.freeze({"chungang-dong":"./chungang-dong/chungang-dong.js","munsong-dong":"./munsong-dong/munsong-dong.js","wonsongi-dong":"./wonsongi-dong/wonsongi-dong.js","wonsongil-tong":"./wonsongil-tong/wonsongil-tong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
