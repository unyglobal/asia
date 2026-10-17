// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ilocos","repository":"asia","path":"philippines/ilocos","depth":2,"parent":"philippines","children":["agoo","aringay","bantay","batac-city","bauang","bayambang","binmaley","calasiao","dagupan","domalanoan","guiset-east","laoag","lingayen","manaoag","mangaldan","rosales","san-nicolas","santa-barbara","tagudin","urdaneta","vigan","villasis"]});
export const childModules = Object.freeze({"agoo":"./agoo/agoo.js","aringay":"./aringay/aringay.js","bantay":"./bantay/bantay.js","batac-city":"./batac-city/batac-city.js","bauang":"./bauang/bauang.js","bayambang":"./bayambang/bayambang.js","binmaley":"./binmaley/binmaley.js","calasiao":"./calasiao/calasiao.js","dagupan":"./dagupan/dagupan.js","domalanoan":"./domalanoan/domalanoan.js","guiset-east":"./guiset-east/guiset-east.js","laoag":"./laoag/laoag.js","lingayen":"./lingayen/lingayen.js","manaoag":"./manaoag/manaoag.js","mangaldan":"./mangaldan/mangaldan.js","rosales":"./rosales/rosales.js","san-nicolas":"./san-nicolas/san-nicolas.js","santa-barbara":"./santa-barbara/santa-barbara.js","tagudin":"./tagudin/tagudin.js","urdaneta":"./urdaneta/urdaneta.js","vigan":"./vigan/vigan.js","villasis":"./villasis/villasis.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
