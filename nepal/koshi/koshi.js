// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"koshi","repository":"asia","path":"nepal/koshi","depth":2,"parent":"nepal","children":["bhadrapur","biratnagar","dhankuta","dharan","ilam","inaruwa","itahari","khadbari","triyuga"]});
export const childModules = Object.freeze({"bhadrapur":"./bhadrapur/bhadrapur.js","biratnagar":"./biratnagar/biratnagar.js","dhankuta":"./dhankuta/dhankuta.js","dharan":"./dharan/dharan.js","ilam":"./ilam/ilam.js","inaruwa":"./inaruwa/inaruwa.js","itahari":"./itahari/itahari.js","khadbari":"./khadbari/khadbari.js","triyuga":"./triyuga/triyuga.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
