// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tadaoka-higashi","repository":"asia","path":"japan/osaka/tadaoka-higashi","depth":3,"parent":"japan/osaka","children":["kitaide","maze","tadaokakita","tadaokaminami"]});
export const childModules = Object.freeze({"kitaide":"./kitaide/kitaide.js","maze":"./maze/maze.js","tadaokakita":"./tadaokakita/tadaokakita.js","tadaokaminami":"./tadaokaminami/tadaokaminami.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
