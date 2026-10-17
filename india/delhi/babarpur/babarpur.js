// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"babarpur","repository":"asia","path":"india/delhi/babarpur","depth":3,"parent":"india/delhi","children":["balbirnagar","pratappura","rohtasnagar","shahdara"]});
export const childModules = Object.freeze({"balbirnagar":"./balbirnagar/balbirnagar.js","pratappura":"./pratappura/pratappura.js","rohtasnagar":"./rohtasnagar/rohtasnagar.js","shahdara":"./shahdara/shahdara.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
