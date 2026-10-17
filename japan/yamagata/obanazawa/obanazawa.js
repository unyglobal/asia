// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"obanazawa","repository":"asia","path":"japan/yamagata/obanazawa","depth":3,"parent":"japan/yamagata","children":["fumotomachi","kammachi","kitamachi","oboroke","shimmachi","yokomachi"]});
export const childModules = Object.freeze({"fumotomachi":"./fumotomachi/fumotomachi.js","kammachi":"./kammachi/kammachi.js","kitamachi":"./kitamachi/kitamachi.js","oboroke":"./oboroke/oboroke.js","shimmachi":"./shimmachi/shimmachi.js","yokomachi":"./yokomachi/yokomachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
