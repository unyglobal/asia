// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jerusalem","repository":"asia","path":"israel/jerusalem","depth":2,"parent":"israel","children":["bet-shemesh","giv-at-hananya","mevasseret-tsiyyon","modiin-ilit","qiryat-hayovel","west-jerusalem"]});
export const childModules = Object.freeze({"bet-shemesh":"./bet-shemesh/bet-shemesh.js","giv-at-hananya":"./giv-at-hananya/giv-at-hananya.js","mevasseret-tsiyyon":"./mevasseret-tsiyyon/mevasseret-tsiyyon.js","modiin-ilit":"./modiin-ilit/modiin-ilit.js","qiryat-hayovel":"./qiryat-hayovel/qiryat-hayovel.js","west-jerusalem":"./west-jerusalem/west-jerusalem.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
