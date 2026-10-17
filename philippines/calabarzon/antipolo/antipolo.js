// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"antipolo","repository":"asia","path":"philippines/calabarzon/antipolo","depth":3,"parent":"philippines/calabarzon","children":["green-heights-subdivision","hermanas-village","hilltown-executive-village","la-unica-hija-subdivision","lourdes-subdivision","luang-hills","maries-village-first","maries-village-second","rich-gate-subdivision","vermont-park-executive-village"]});
export const childModules = Object.freeze({"green-heights-subdivision":"./green-heights-subdivision/green-heights-subdivision.js","hermanas-village":"./hermanas-village/hermanas-village.js","hilltown-executive-village":"./hilltown-executive-village/hilltown-executive-village.js","la-unica-hija-subdivision":"./la-unica-hija-subdivision/la-unica-hija-subdivision.js","lourdes-subdivision":"./lourdes-subdivision/lourdes-subdivision.js","luang-hills":"./luang-hills/luang-hills.js","maries-village-first":"./maries-village-first/maries-village-first.js","maries-village-second":"./maries-village-second/maries-village-second.js","rich-gate-subdivision":"./rich-gate-subdivision/rich-gate-subdivision.js","vermont-park-executive-village":"./vermont-park-executive-village/vermont-park-executive-village.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
