// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"armenia","repository":"asia","path":"armenia","depth":1,"parent":"","children":["aragatsotn","ararat","armavir","gegharkunik","kotayk","lori","shirak","syunik","tavush","yerevan"]});
export const childModules = Object.freeze({"aragatsotn":"./aragatsotn/aragatsotn.js","ararat":"./ararat/ararat.js","armavir":"./armavir/armavir.js","gegharkunik":"./gegharkunik/gegharkunik.js","kotayk":"./kotayk/kotayk.js","lori":"./lori/lori.js","shirak":"./shirak/shirak.js","syunik":"./syunik/syunik.js","tavush":"./tavush/tavush.js","yerevan":"./yerevan/yerevan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
