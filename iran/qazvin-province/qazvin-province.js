// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"qazvin-province","repository":"asia","path":"iran/qazvin-province","depth":2,"parent":"iran","children":["alvand","bidestan","bu-in-zahra","mahmudabad-nemuneh","mohammadiyeh","qazvin","shal","sharifabad","takestan"]});
export const childModules = Object.freeze({"alvand":"./alvand/alvand.js","bidestan":"./bidestan/bidestan.js","bu-in-zahra":"./bu-in-zahra/bu-in-zahra.js","mahmudabad-nemuneh":"./mahmudabad-nemuneh/mahmudabad-nemuneh.js","mohammadiyeh":"./mohammadiyeh/mohammadiyeh.js","qazvin":"./qazvin/qazvin.js","shal":"./shal/shal.js","sharifabad":"./sharifabad/sharifabad.js","takestan":"./takestan/takestan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
