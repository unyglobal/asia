// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"turkistan","repository":"asia","path":"kazakhstan/turkistan","depth":2,"parent":"kazakhstan","children":["arys","kentau","lenger","saryaghash","shardara","turar-ryskulov","zhetysay"]});
export const childModules = Object.freeze({"arys":"./arys/arys.js","kentau":"./kentau/kentau.js","lenger":"./lenger/lenger.js","saryaghash":"./saryaghash/saryaghash.js","shardara":"./shardara/shardara.js","turar-ryskulov":"./turar-ryskulov/turar-ryskulov.js","zhetysay":"./zhetysay/zhetysay.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
