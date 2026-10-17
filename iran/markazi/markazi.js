// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"markazi","repository":"asia","path":"iran/markazi","depth":2,"parent":"iran","children":["arak","delijan","karahrud","khomeyn","mahajeran","mahallat","mamuniyeh","saveh","shazand","tafresh"]});
export const childModules = Object.freeze({"arak":"./arak/arak.js","delijan":"./delijan/delijan.js","karahrud":"./karahrud/karahrud.js","khomeyn":"./khomeyn/khomeyn.js","mahajeran":"./mahajeran/mahajeran.js","mahallat":"./mahallat/mahallat.js","mamuniyeh":"./mamuniyeh/mamuniyeh.js","saveh":"./saveh/saveh.js","shazand":"./shazand/shazand.js","tafresh":"./tafresh/tafresh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
