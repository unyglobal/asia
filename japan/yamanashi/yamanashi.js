// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yamanashi","repository":"asia","path":"japan/yamanashi","depth":2,"parent":"japan","children":["enzan","fuefuki","fujikawaguchiko","fujiyoshida","isawa","kai","kofu","koshu","minami-alps","minamiarupusu","nirasaki","otsuki","ryuo","showa","tsuru","uenohara"]});
export const childModules = Object.freeze({"enzan":"./enzan/enzan.js","fuefuki":"./fuefuki/fuefuki.js","fujikawaguchiko":"./fujikawaguchiko/fujikawaguchiko.js","fujiyoshida":"./fujiyoshida/fujiyoshida.js","isawa":"./isawa/isawa.js","kai":"./kai/kai.js","kofu":"./kofu/kofu.js","koshu":"./koshu/koshu.js","minami-alps":"./minami-alps/minami-alps.js","minamiarupusu":"./minamiarupusu/minamiarupusu.js","nirasaki":"./nirasaki/nirasaki.js","otsuki":"./otsuki/otsuki.js","ryuo":"./ryuo/ryuo.js","showa":"./showa/showa.js","tsuru":"./tsuru/tsuru.js","uenohara":"./uenohara/uenohara.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
