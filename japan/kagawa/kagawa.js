// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kagawa","repository":"asia","path":"japan/kagawa","depth":2,"parent":"japan","children":["higashikagawa","hiragi","kan-onjicho","marugame","mitoyo","sakaidecho","shido","shioiri","tadotsu","takamatsu","takinomiya","utazu","zentsujicho"]});
export const childModules = Object.freeze({"higashikagawa":"./higashikagawa/higashikagawa.js","hiragi":"./hiragi/hiragi.js","kan-onjicho":"./kan-onjicho/kan-onjicho.js","marugame":"./marugame/marugame.js","mitoyo":"./mitoyo/mitoyo.js","sakaidecho":"./sakaidecho/sakaidecho.js","shido":"./shido/shido.js","shioiri":"./shioiri/shioiri.js","tadotsu":"./tadotsu/tadotsu.js","takamatsu":"./takamatsu/takamatsu.js","takinomiya":"./takinomiya/takinomiya.js","utazu":"./utazu/utazu.js","zentsujicho":"./zentsujicho/zentsujicho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
