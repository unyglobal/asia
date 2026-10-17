// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"marilao","repository":"asia","path":"philippines/central-luzon/marilao","depth":3,"parent":"philippines/central-luzon","children":["constantino-parks-subdivision","fausta-village","maria-ramos-village"]});
export const childModules = Object.freeze({"constantino-parks-subdivision":"./constantino-parks-subdivision/constantino-parks-subdivision.js","fausta-village":"./fausta-village/fausta-village.js","maria-ramos-village":"./maria-ramos-village/maria-ramos-village.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
