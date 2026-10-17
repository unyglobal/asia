// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"arunachal-pradesh","repository":"asia","path":"india/arunachal-pradesh","depth":2,"parent":"india","children":["along","itanagar","jining","naharlagun","pasighat","seppa","tezu"]});
export const childModules = Object.freeze({"along":"./along/along.js","itanagar":"./itanagar/itanagar.js","jining":"./jining/jining.js","naharlagun":"./naharlagun/naharlagun.js","pasighat":"./pasighat/pasighat.js","seppa":"./seppa/seppa.js","tezu":"./tezu/tezu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
