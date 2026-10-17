// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kurdistan-province","repository":"asia","path":"iran/kurdistan-province","depth":2,"parent":"iran","children":["baneh","bijar","divandarreh","kamyaran","marivan","qorveh","sanandaj","saqqez"]});
export const childModules = Object.freeze({"baneh":"./baneh/baneh.js","bijar":"./bijar/bijar.js","divandarreh":"./divandarreh/divandarreh.js","kamyaran":"./kamyaran/kamyaran.js","marivan":"./marivan/marivan.js","qorveh":"./qorveh/qorveh.js","sanandaj":"./sanandaj/sanandaj.js","saqqez":"./saqqez/saqqez.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
