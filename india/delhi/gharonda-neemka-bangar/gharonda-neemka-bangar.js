// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gharonda-neemka-bangar","repository":"asia","path":"india/delhi/gharonda-neemka-bangar","depth":3,"parent":"india/delhi","children":["pandavnagar","shamaspur"]});
export const childModules = Object.freeze({"pandavnagar":"./pandavnagar/pandavnagar.js","shamaspur":"./shamaspur/shamaspur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
