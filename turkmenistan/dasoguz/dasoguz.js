// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dasoguz","repository":"asia","path":"turkmenistan/dasoguz","depth":2,"parent":"turkmenistan","children":["boldumsaz","gorogly","gubadag","koneurgenc","oyrat","yylanly"]});
export const childModules = Object.freeze({"boldumsaz":"./boldumsaz/boldumsaz.js","gorogly":"./gorogly/gorogly.js","gubadag":"./gubadag/gubadag.js","koneurgenc":"./koneurgenc/koneurgenc.js","oyrat":"./oyrat/oyrat.js","yylanly":"./yylanly/yylanly.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
