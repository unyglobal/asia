// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pakistan","repository":"asia","path":"pakistan","depth":1,"parent":"","children":["alipur","alipur-a","azad-kashmir","bahawalnagar","bahawalnagar-a","balochistan","gilgit-baltistan","islamabad","kamra","kamra-a","khyber-pakhtunkhwa","punjab","sahiwal","sahiwal-a","sindh"]});
export const childModules = Object.freeze({"alipur":"./alipur/alipur.js","alipur-a":"./alipur-a/alipur-a.js","azad-kashmir":"./azad-kashmir/azad-kashmir.js","bahawalnagar":"./bahawalnagar/bahawalnagar.js","bahawalnagar-a":"./bahawalnagar-a/bahawalnagar-a.js","balochistan":"./balochistan/balochistan.js","gilgit-baltistan":"./gilgit-baltistan/gilgit-baltistan.js","islamabad":"./islamabad/islamabad.js","kamra":"./kamra/kamra.js","kamra-a":"./kamra-a/kamra-a.js","khyber-pakhtunkhwa":"./khyber-pakhtunkhwa/khyber-pakhtunkhwa.js","punjab":"./punjab/punjab.js","sahiwal":"./sahiwal/sahiwal.js","sahiwal-a":"./sahiwal-a/sahiwal-a.js","sindh":"./sindh/sindh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
