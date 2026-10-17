// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"razavi-khorasan","repository":"asia","path":"iran/razavi-khorasan","depth":2,"parent":"iran","children":["bardaskan","chenaran","dargaz","golbahar","gonabad","gorji-ye-sofla","kashmar","khvaf","mashhad","neyshabur","quchan","sabzevar","sarakhs","taybad","torbat-e-heydariyeh","torbat-e-jam","torqabeh"]});
export const childModules = Object.freeze({"bardaskan":"./bardaskan/bardaskan.js","chenaran":"./chenaran/chenaran.js","dargaz":"./dargaz/dargaz.js","golbahar":"./golbahar/golbahar.js","gonabad":"./gonabad/gonabad.js","gorji-ye-sofla":"./gorji-ye-sofla/gorji-ye-sofla.js","kashmar":"./kashmar/kashmar.js","khvaf":"./khvaf/khvaf.js","mashhad":"./mashhad/mashhad.js","neyshabur":"./neyshabur/neyshabur.js","quchan":"./quchan/quchan.js","sabzevar":"./sabzevar/sabzevar.js","sarakhs":"./sarakhs/sarakhs.js","taybad":"./taybad/taybad.js","torbat-e-heydariyeh":"./torbat-e-heydariyeh/torbat-e-heydariyeh.js","torbat-e-jam":"./torbat-e-jam/torbat-e-jam.js","torqabeh":"./torqabeh/torqabeh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
