// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"magway","repository":"asia","path":"myanmar/magway","depth":2,"parent":"myanmar","children":["chauk","minbu","myaydo","pakokku","taungdwingyi","thayetmyo","yenangyaung","yesagyo"]});
export const childModules = Object.freeze({"chauk":"./chauk/chauk.js","minbu":"./minbu/minbu.js","myaydo":"./myaydo/myaydo.js","pakokku":"./pakokku/pakokku.js","taungdwingyi":"./taungdwingyi/taungdwingyi.js","thayetmyo":"./thayetmyo/thayetmyo.js","yenangyaung":"./yenangyaung/yenangyaung.js","yesagyo":"./yesagyo/yesagyo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
