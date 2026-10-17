// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"goa","repository":"asia","path":"india/goa","depth":2,"parent":"india","children":["bicholim","calangute","chimbel","cuncolim","curchorem","curti","davorlim","madgaon","mapusa","mormugao","panjim","penha-de-franca","ponda","sancoale","taleigao","vasco-da-gama"]});
export const childModules = Object.freeze({"bicholim":"./bicholim/bicholim.js","calangute":"./calangute/calangute.js","chimbel":"./chimbel/chimbel.js","cuncolim":"./cuncolim/cuncolim.js","curchorem":"./curchorem/curchorem.js","curti":"./curti/curti.js","davorlim":"./davorlim/davorlim.js","madgaon":"./madgaon/madgaon.js","mapusa":"./mapusa/mapusa.js","mormugao":"./mormugao/mormugao.js","panjim":"./panjim/panjim.js","penha-de-franca":"./penha-de-franca/penha-de-franca.js","ponda":"./ponda/ponda.js","sancoale":"./sancoale/sancoale.js","taleigao":"./taleigao/taleigao.js","vasco-da-gama":"./vasco-da-gama/vasco-da-gama.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
