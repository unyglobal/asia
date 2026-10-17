// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ubon-ratchathani","repository":"asia","path":"thailand/ubon-ratchathani","depth":2,"parent":"thailand","children":["det-udom","phibun-mangsahan","warin-chamrap"]});
export const childModules = Object.freeze({"det-udom":"./det-udom/det-udom.js","phibun-mangsahan":"./phibun-mangsahan/phibun-mangsahan.js","warin-chamrap":"./warin-chamrap/warin-chamrap.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
