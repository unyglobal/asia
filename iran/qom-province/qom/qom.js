// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"qom","repository":"asia","path":"iran/qom-province/qom","depth":3,"parent":"iran/qom-province","children":["alvandiyeh-va-gozar-sadeq","eshq-ali","gozar-qal-eh","juy-e-shur","khandaq","mahalleh-ye-abshar","mahalleh-ye-sang-band","meydan-e-now","qom-now","safa-iyeh","takyeh-aqa-seyyed-hasani","yakhchal-e-qazi","zad"]});
export const childModules = Object.freeze({"alvandiyeh-va-gozar-sadeq":"./alvandiyeh-va-gozar-sadeq/alvandiyeh-va-gozar-sadeq.js","eshq-ali":"./eshq-ali/eshq-ali.js","gozar-qal-eh":"./gozar-qal-eh/gozar-qal-eh.js","juy-e-shur":"./juy-e-shur/juy-e-shur.js","khandaq":"./khandaq/khandaq.js","mahalleh-ye-abshar":"./mahalleh-ye-abshar/mahalleh-ye-abshar.js","mahalleh-ye-sang-band":"./mahalleh-ye-sang-band/mahalleh-ye-sang-band.js","meydan-e-now":"./meydan-e-now/meydan-e-now.js","qom-now":"./qom-now/qom-now.js","safa-iyeh":"./safa-iyeh/safa-iyeh.js","takyeh-aqa-seyyed-hasani":"./takyeh-aqa-seyyed-hasani/takyeh-aqa-seyyed-hasani.js","yakhchal-e-qazi":"./yakhchal-e-qazi/yakhchal-e-qazi.js","zad":"./zad/zad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
