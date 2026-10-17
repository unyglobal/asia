// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bago-region","repository":"asia","path":"myanmar/bago-region","depth":2,"parent":"myanmar","children":["bago","daik-u","letpandan","nyaunglebin","paungde","pyay","pyu","shwegyin","taungoo","thanatpin","tharyarwady","waw","yedashe","zigon"]});
export const childModules = Object.freeze({"bago":"./bago/bago.js","daik-u":"./daik-u/daik-u.js","letpandan":"./letpandan/letpandan.js","nyaunglebin":"./nyaunglebin/nyaunglebin.js","paungde":"./paungde/paungde.js","pyay":"./pyay/pyay.js","pyu":"./pyu/pyu.js","shwegyin":"./shwegyin/shwegyin.js","taungoo":"./taungoo/taungoo.js","thanatpin":"./thanatpin/thanatpin.js","tharyarwady":"./tharyarwady/tharyarwady.js","waw":"./waw/waw.js","yedashe":"./yedashe/yedashe.js","zigon":"./zigon/zigon.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
