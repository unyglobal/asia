// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rangpur-division","repository":"asia","path":"bangladesh/rangpur-division","depth":2,"parent":"bangladesh","children":["badarganj","chilmari","dinajpur","lalmonirhat","nageswari","panchagarh","paotana-hat","parbatipur","pirgaaj","rangpur","saidpur","thakurgaon"]});
export const childModules = Object.freeze({"badarganj":"./badarganj/badarganj.js","chilmari":"./chilmari/chilmari.js","dinajpur":"./dinajpur/dinajpur.js","lalmonirhat":"./lalmonirhat/lalmonirhat.js","nageswari":"./nageswari/nageswari.js","panchagarh":"./panchagarh/panchagarh.js","paotana-hat":"./paotana-hat/paotana-hat.js","parbatipur":"./parbatipur/parbatipur.js","pirgaaj":"./pirgaaj/pirgaaj.js","rangpur":"./rangpur/rangpur.js","saidpur":"./saidpur/saidpur.js","thakurgaon":"./thakurgaon/thakurgaon.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
