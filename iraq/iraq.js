// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"iraq","repository":"asia","path":"iraq","depth":1,"parent":"","children":["al-qadisiyah","anbar","babil","baghdad","basra","dhi-qar","diyala","duhok","erbil","halabja","karbala","kirkuk","maysan","muthanna","najaf","nineveh","salah-ad-din","sulaymaniyah","wasit"]});
export const childModules = Object.freeze({"al-qadisiyah":"./al-qadisiyah/al-qadisiyah.js","anbar":"./anbar/anbar.js","babil":"./babil/babil.js","baghdad":"./baghdad/baghdad.js","basra":"./basra/basra.js","dhi-qar":"./dhi-qar/dhi-qar.js","diyala":"./diyala/diyala.js","duhok":"./duhok/duhok.js","erbil":"./erbil/erbil.js","halabja":"./halabja/halabja.js","karbala":"./karbala/karbala.js","kirkuk":"./kirkuk/kirkuk.js","maysan":"./maysan/maysan.js","muthanna":"./muthanna/muthanna.js","najaf":"./najaf/najaf.js","nineveh":"./nineveh/nineveh.js","salah-ad-din":"./salah-ad-din/salah-ad-din.js","sulaymaniyah":"./sulaymaniyah/sulaymaniyah.js","wasit":"./wasit/wasit.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
