// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gia-lai","repository":"asia","path":"vietnam/gia-lai","depth":2,"parent":"vietnam","children":["a-yun-pa","an-khe","an-nhon","pleiku","qui-nhon"]});
export const childModules = Object.freeze({"a-yun-pa":"./a-yun-pa/a-yun-pa.js","an-khe":"./an-khe/an-khe.js","an-nhon":"./an-nhon/an-nhon.js","pleiku":"./pleiku/pleiku.js","qui-nhon":"./qui-nhon/qui-nhon.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
