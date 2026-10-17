// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bet-she-an","repository":"asia","path":"israel/northern-district/bet-she-an","depth":3,"parent":"israel/northern-district","children":["shkhunat-eliyyahu","shkhunat-gordon","shkhunat-halutsim"]});
export const childModules = Object.freeze({"shkhunat-eliyyahu":"./shkhunat-eliyyahu/shkhunat-eliyyahu.js","shkhunat-gordon":"./shkhunat-gordon/shkhunat-gordon.js","shkhunat-halutsim":"./shkhunat-halutsim/shkhunat-halutsim.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
