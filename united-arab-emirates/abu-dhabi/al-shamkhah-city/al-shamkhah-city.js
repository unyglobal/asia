// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-shamkhah-city","repository":"asia","path":"united-arab-emirates/abu-dhabi/al-shamkhah-city","depth":3,"parent":"united-arab-emirates/abu-dhabi","children":["sh10","sh16"]});
export const childModules = Object.freeze({"sh10":"./sh10/sh10.js","sh16":"./sh16/sh16.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
