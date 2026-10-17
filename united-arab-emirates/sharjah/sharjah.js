// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sharjah","repository":"asia","path":"united-arab-emirates/sharjah","depth":2,"parent":"united-arab-emirates","children":["adh-dhayd","al-majaz","al-sajaah","halwan","kalba","khawr-fakkan"]});
export const childModules = Object.freeze({"adh-dhayd":"./adh-dhayd/adh-dhayd.js","al-majaz":"./al-majaz/al-majaz.js","al-sajaah":"./al-sajaah/al-sajaah.js","halwan":"./halwan/halwan.js","kalba":"./kalba/kalba.js","khawr-fakkan":"./khawr-fakkan/khawr-fakkan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
