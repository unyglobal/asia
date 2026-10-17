// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"georgia","repository":"asia","path":"georgia","depth":1,"parent":"","children":["abkhazia","adjara","imereti","kakheti","kvemo-kartli","samegrelo-and-zemo-svaneti","samtskhe-javakheti","shida-kartli","tbilisi"]});
export const childModules = Object.freeze({"abkhazia":"./abkhazia/abkhazia.js","adjara":"./adjara/adjara.js","imereti":"./imereti/imereti.js","kakheti":"./kakheti/kakheti.js","kvemo-kartli":"./kvemo-kartli/kvemo-kartli.js","samegrelo-and-zemo-svaneti":"./samegrelo-and-zemo-svaneti/samegrelo-and-zemo-svaneti.js","samtskhe-javakheti":"./samtskhe-javakheti/samtskhe-javakheti.js","shida-kartli":"./shida-kartli/shida-kartli.js","tbilisi":"./tbilisi/tbilisi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
