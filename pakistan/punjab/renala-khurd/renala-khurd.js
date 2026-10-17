// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"renala-khurd","repository":"asia","path":"pakistan/punjab/renala-khurd","depth":3,"parent":"pakistan/punjab","children":["basti-amir-khoji","basti-hazurwal","lehrasib-town","muslim-town","nusrat-mehdi-khan-town"]});
export const childModules = Object.freeze({"basti-amir-khoji":"./basti-amir-khoji/basti-amir-khoji.js","basti-hazurwal":"./basti-hazurwal/basti-hazurwal.js","lehrasib-town":"./lehrasib-town/lehrasib-town.js","muslim-town":"./muslim-town/muslim-town.js","nusrat-mehdi-khan-town":"./nusrat-mehdi-khan-town/nusrat-mehdi-khan-town.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
