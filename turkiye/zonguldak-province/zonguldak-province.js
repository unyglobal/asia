// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zonguldak-province","repository":"asia","path":"turkiye/zonguldak-province","depth":2,"parent":"turkiye","children":["alapl","caycuma","devrek","zonguldak"]});
export const childModules = Object.freeze({"alapl":"./alapl/alapl.js","caycuma":"./caycuma/caycuma.js","devrek":"./devrek/devrek.js","zonguldak":"./zonguldak/zonguldak.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
