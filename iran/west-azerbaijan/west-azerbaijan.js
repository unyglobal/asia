// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"west-azerbaijan","repository":"asia","path":"iran/west-azerbaijan","depth":2,"parent":"iran","children":["bukan","khuy","mahabad","miandoab","naqadeh","orumiyeh","oshnaviyeh","piranshahr","poldasht","qarah-zia-od-din","salmas","sardasht","seyah-cheshmeh","shahin-dezh","showt","takab"]});
export const childModules = Object.freeze({"bukan":"./bukan/bukan.js","khuy":"./khuy/khuy.js","mahabad":"./mahabad/mahabad.js","miandoab":"./miandoab/miandoab.js","naqadeh":"./naqadeh/naqadeh.js","orumiyeh":"./orumiyeh/orumiyeh.js","oshnaviyeh":"./oshnaviyeh/oshnaviyeh.js","piranshahr":"./piranshahr/piranshahr.js","poldasht":"./poldasht/poldasht.js","qarah-zia-od-din":"./qarah-zia-od-din/qarah-zia-od-din.js","salmas":"./salmas/salmas.js","sardasht":"./sardasht/sardasht.js","seyah-cheshmeh":"./seyah-cheshmeh/seyah-cheshmeh.js","shahin-dezh":"./shahin-dezh/shahin-dezh.js","showt":"./showt/showt.js","takab":"./takab/takab.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
