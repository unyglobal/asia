// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kefamenanu","repository":"asia","path":"indonesia/east-nusa-tenggara/kefamenanu","depth":3,"parent":"indonesia/east-nusa-tenggara","children":["bansone","fatuteke","kelapatiga","kenari","nunpene","pakdaging","sabu","tanahputih","tunbakun"]});
export const childModules = Object.freeze({"bansone":"./bansone/bansone.js","fatuteke":"./fatuteke/fatuteke.js","kelapatiga":"./kelapatiga/kelapatiga.js","kenari":"./kenari/kenari.js","nunpene":"./nunpene/nunpene.js","pakdaging":"./pakdaging/pakdaging.js","sabu":"./sabu/sabu.js","tanahputih":"./tanahputih/tanahputih.js","tunbakun":"./tunbakun/tunbakun.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
