// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"prachuap-khiri-khan","repository":"asia","path":"thailand/prachuap-khiri-khan","depth":2,"parent":"thailand","children":["bang-saphan","hua-hin","kui-buri","pran-buri","sam-roi-yot"]});
export const childModules = Object.freeze({"bang-saphan":"./bang-saphan/bang-saphan.js","hua-hin":"./hua-hin/hua-hin.js","kui-buri":"./kui-buri/kui-buri.js","pran-buri":"./pran-buri/pran-buri.js","sam-roi-yot":"./sam-roi-yot/sam-roi-yot.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
