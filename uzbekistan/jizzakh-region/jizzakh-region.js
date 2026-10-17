// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jizzakh-region","repository":"asia","path":"uzbekistan/jizzakh-region","depth":2,"parent":"uzbekistan","children":["dashtobod","do-stlik-shahri","g-allaorol-shahri","gagarin-shahri","jizzax","paxtakor-shahri","zomin-shaharchasi"]});
export const childModules = Object.freeze({"dashtobod":"./dashtobod/dashtobod.js","do-stlik-shahri":"./do-stlik-shahri/do-stlik-shahri.js","g-allaorol-shahri":"./g-allaorol-shahri/g-allaorol-shahri.js","gagarin-shahri":"./gagarin-shahri/gagarin-shahri.js","jizzax":"./jizzax/jizzax.js","paxtakor-shahri":"./paxtakor-shahri/paxtakor-shahri.js","zomin-shaharchasi":"./zomin-shaharchasi/zomin-shaharchasi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
