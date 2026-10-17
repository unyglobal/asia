// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"miyashiro","repository":"asia","path":"japan/saitama/miyashiro","depth":3,"parent":"japan/saitama","children":["chuo","honden","kasahara","momma"]});
export const childModules = Object.freeze({"chuo":"./chuo/chuo.js","honden":"./honden/honden.js","kasahara":"./kasahara/kasahara.js","momma":"./momma/momma.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
