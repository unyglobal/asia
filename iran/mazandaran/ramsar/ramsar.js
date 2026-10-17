// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ramsar","repository":"asia","path":"iran/mazandaran/ramsar","depth":3,"parent":"iran/mazandaran","children":["abrisham-mahalleh","gharib-mahalleh","lamtar","lapa-sar","narenj-bon","zaki-mahalleh"]});
export const childModules = Object.freeze({"abrisham-mahalleh":"./abrisham-mahalleh/abrisham-mahalleh.js","gharib-mahalleh":"./gharib-mahalleh/gharib-mahalleh.js","lamtar":"./lamtar/lamtar.js","lapa-sar":"./lapa-sar/lapa-sar.js","narenj-bon":"./narenj-bon/narenj-bon.js","zaki-mahalleh":"./zaki-mahalleh/zaki-mahalleh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
