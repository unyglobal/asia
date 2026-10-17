// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-governorate","repository":"asia","path":"lebanon/south-governorate","depth":2,"parent":"lebanon","children":["en-naqoura","ghazieh","sidon","tyre"]});
export const childModules = Object.freeze({"en-naqoura":"./en-naqoura/en-naqoura.js","ghazieh":"./ghazieh/ghazieh.js","sidon":"./sidon/sidon.js","tyre":"./tyre/tyre.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
