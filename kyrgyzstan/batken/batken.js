// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"batken","repository":"asia","path":"kyrgyzstan/batken","depth":2,"parent":"kyrgyzstan","children":["iradan","kyzyl-kyya","razzakov","suluktu"]});
export const childModules = Object.freeze({"iradan":"./iradan/iradan.js","kyzyl-kyya":"./kyzyl-kyya/kyzyl-kyya.js","razzakov":"./razzakov/razzakov.js","suluktu":"./suluktu/suluktu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
