// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"khalifah-a-city","repository":"asia","path":"united-arab-emirates/abu-dhabi/khalifah-a-city","depth":3,"parent":"united-arab-emirates/abu-dhabi","children":["se39","se40","se43","se45-01","se45-02"]});
export const childModules = Object.freeze({"se39":"./se39/se39.js","se40":"./se40/se40.js","se43":"./se43/se43.js","se45-01":"./se45-01/se45-01.js","se45-02":"./se45-02/se45-02.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
