// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gilan-province","repository":"asia","path":"iran/gilan-province","depth":2,"parent":"iran","children":["amlash","astaneh-ye-ashrafiyeh","astara","bandar-e-anzali","fuman","hashtpar","khomam","lahijan","langarud","manjil","masal","padegan-e-manjil","rasht","rezvanshahr","rudsar","siahkal","sowme-eh-sara"]});
export const childModules = Object.freeze({"amlash":"./amlash/amlash.js","astaneh-ye-ashrafiyeh":"./astaneh-ye-ashrafiyeh/astaneh-ye-ashrafiyeh.js","astara":"./astara/astara.js","bandar-e-anzali":"./bandar-e-anzali/bandar-e-anzali.js","fuman":"./fuman/fuman.js","hashtpar":"./hashtpar/hashtpar.js","khomam":"./khomam/khomam.js","lahijan":"./lahijan/lahijan.js","langarud":"./langarud/langarud.js","manjil":"./manjil/manjil.js","masal":"./masal/masal.js","padegan-e-manjil":"./padegan-e-manjil/padegan-e-manjil.js","rasht":"./rasht/rasht.js","rezvanshahr":"./rezvanshahr/rezvanshahr.js","rudsar":"./rudsar/rudsar.js","siahkal":"./siahkal/siahkal.js","sowme-eh-sara":"./sowme-eh-sara/sowme-eh-sara.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
