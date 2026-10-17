// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"meerut","repository":"asia","path":"india/uttar-pradesh/meerut","depth":3,"parent":"india/uttar-pradesh","children":["beli-bazar","khairnagar","shivpuri"]});
export const childModules = Object.freeze({"beli-bazar":"./beli-bazar/beli-bazar.js","khairnagar":"./khairnagar/khairnagar.js","shivpuri":"./shivpuri/shivpuri.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
