// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mohammed-bin-zayed-city","repository":"asia","path":"united-arab-emirates/abu-dhabi/mohammed-bin-zayed-city","depth":3,"parent":"united-arab-emirates/abu-dhabi","children":["z13","z17","z5","z7","z8"]});
export const childModules = Object.freeze({"z13":"./z13/z13.js","z17":"./z17/z17.js","z5":"./z5/z5.js","z7":"./z7/z7.js","z8":"./z8/z8.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
