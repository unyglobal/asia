// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"razampeta","repository":"asia","path":"india/andhra-pradesh/razampeta","depth":3,"parent":"india/andhra-pradesh","children":["anantarazupuram","yenamadalavandlapalli"]});
export const childModules = Object.freeze({"anantarazupuram":"./anantarazupuram/anantarazupuram.js","yenamadalavandlapalli":"./yenamadalavandlapalli/yenamadalavandlapalli.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
