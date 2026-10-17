// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fukiage-fujimi","repository":"asia","path":"japan/saitama/fukiage-fujimi","depth":3,"parent":"japan/saitama","children":["enokido","fukiagehoncho","minami","tsukuba"]});
export const childModules = Object.freeze({"enokido":"./enokido/enokido.js","fukiagehoncho":"./fukiagehoncho/fukiagehoncho.js","minami":"./minami/minami.js","tsukuba":"./tsukuba/tsukuba.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
