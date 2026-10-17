// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"eastern-province","repository":"asia","path":"sri-lanka/eastern-province","depth":2,"parent":"sri-lanka","children":["ampara","batticaloa","eravur-town","kalmunai","pottuvil","trincomalee","vakarai"]});
export const childModules = Object.freeze({"ampara":"./ampara/ampara.js","batticaloa":"./batticaloa/batticaloa.js","eravur-town":"./eravur-town/eravur-town.js","kalmunai":"./kalmunai/kalmunai.js","pottuvil":"./pottuvil/pottuvil.js","trincomalee":"./trincomalee/trincomalee.js","vakarai":"./vakarai/vakarai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
