// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kohgiluyeh-and-boyer-ahmad","repository":"asia","path":"iran/kohgiluyeh-and-boyer-ahmad","depth":2,"parent":"iran","children":["charam","dehdasht","dogonbadan","likak","madavan","yasuj"]});
export const childModules = Object.freeze({"charam":"./charam/charam.js","dehdasht":"./dehdasht/dehdasht.js","dogonbadan":"./dogonbadan/dogonbadan.js","likak":"./likak/likak.js","madavan":"./madavan/madavan.js","yasuj":"./yasuj/yasuj.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
