// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"amir-kola","repository":"asia","path":"iran/mazandaran/amir-kola","depth":3,"parent":"iran/mazandaran","children":["gileh-kola","mahalleh-ye-hajji-kola","mahalleh-ye-valikadan","molla-mahalleh"]});
export const childModules = Object.freeze({"gileh-kola":"./gileh-kola/gileh-kola.js","mahalleh-ye-hajji-kola":"./mahalleh-ye-hajji-kola/mahalleh-ye-hajji-kola.js","mahalleh-ye-valikadan":"./mahalleh-ye-valikadan/mahalleh-ye-valikadan.js","molla-mahalleh":"./molla-mahalleh/molla-mahalleh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
