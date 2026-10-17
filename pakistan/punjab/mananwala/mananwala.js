// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mananwala","repository":"asia","path":"pakistan/punjab/mananwala","depth":3,"parent":"pakistan/punjab","children":["shah-faisal-town","suleman-town"]});
export const childModules = Object.freeze({"shah-faisal-town":"./shah-faisal-town/shah-faisal-town.js","suleman-town":"./suleman-town/suleman-town.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
