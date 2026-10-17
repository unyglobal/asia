// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"byblos","repository":"asia","path":"lebanon/mount-lebanon/byblos","depth":3,"parent":"lebanon/mount-lebanon","children":["douane","hai-er-raml","hai-es-sensal","hai-mar-jerios","hai-mar-youssef"]});
export const childModules = Object.freeze({"douane":"./douane/douane.js","hai-er-raml":"./hai-er-raml/hai-er-raml.js","hai-es-sensal":"./hai-es-sensal/hai-es-sensal.js","hai-mar-jerios":"./hai-mar-jerios/hai-mar-jerios.js","hai-mar-youssef":"./hai-mar-youssef/hai-mar-youssef.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
