// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fujairah","repository":"asia","path":"united-arab-emirates/fujairah","depth":2,"parent":"united-arab-emirates","children":["dibba-al-fujairah","dibba-al-hisn","reef-al-fujairah-city","tarif-kalba"]});
export const childModules = Object.freeze({"dibba-al-fujairah":"./dibba-al-fujairah/dibba-al-fujairah.js","dibba-al-hisn":"./dibba-al-hisn/dibba-al-hisn.js","reef-al-fujairah-city":"./reef-al-fujairah-city/reef-al-fujairah-city.js","tarif-kalba":"./tarif-kalba/tarif-kalba.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
