// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"miyazaki","repository":"asia","path":"japan/miyazaki","depth":2,"parent":"japan","children":["ebino","hyuga","kadogawa","kawaminami","kobayashi","kushima","miyakonojo","mochibaru","nichinan","nobeoka","saito","shintomi","takanabe","tsuma"]});
export const childModules = Object.freeze({"ebino":"./ebino/ebino.js","hyuga":"./hyuga/hyuga.js","kadogawa":"./kadogawa/kadogawa.js","kawaminami":"./kawaminami/kawaminami.js","kobayashi":"./kobayashi/kobayashi.js","kushima":"./kushima/kushima.js","miyakonojo":"./miyakonojo/miyakonojo.js","mochibaru":"./mochibaru/mochibaru.js","nichinan":"./nichinan/nichinan.js","nobeoka":"./nobeoka/nobeoka.js","saito":"./saito/saito.js","shintomi":"./shintomi/shintomi.js","takanabe":"./takanabe/takanabe.js","tsuma":"./tsuma/tsuma.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
