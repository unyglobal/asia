// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"israel","repository":"asia","path":"israel","depth":1,"parent":"","children":["binyamina-giv-at-ada","binyamina-giv-at-ada-a","central-district","haifa","jerusalem","judea-and-samaria-area","northern-district","southern-district","tel-aviv"]});
export const childModules = Object.freeze({"binyamina-giv-at-ada":"./binyamina-giv-at-ada/binyamina-giv-at-ada.js","binyamina-giv-at-ada-a":"./binyamina-giv-at-ada-a/binyamina-giv-at-ada-a.js","central-district":"./central-district/central-district.js","haifa":"./haifa/haifa.js","jerusalem":"./jerusalem/jerusalem.js","judea-and-samaria-area":"./judea-and-samaria-area/judea-and-samaria-area.js","northern-district":"./northern-district/northern-district.js","southern-district":"./southern-district/southern-district.js","tel-aviv":"./tel-aviv/tel-aviv.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
