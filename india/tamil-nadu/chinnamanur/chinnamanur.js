// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chinnamanur","repository":"asia","path":"india/tamil-nadu/chinnamanur","depth":3,"parent":"india/tamil-nadu","children":["chattram","karungattankulam"]});
export const childModules = Object.freeze({"chattram":"./chattram/chattram.js","karungattankulam":"./karungattankulam/karungattankulam.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
