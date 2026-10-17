// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"akashi","repository":"asia","path":"japan/hyogo/akashi","depth":3,"parent":"japan/hyogo","children":["kitaasagirioka","taidera","uenomaru"]});
export const childModules = Object.freeze({"kitaasagirioka":"./kitaasagirioka/kitaasagirioka.js","taidera":"./taidera/taidera.js","uenomaru":"./uenomaru/uenomaru.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
