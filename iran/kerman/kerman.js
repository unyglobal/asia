// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kerman","repository":"asia","path":"iran/kerman","depth":2,"parent":"iran","children":["anar","anbarabad","baft","bam","baravat","bardsir","jiroft","kahnuj","mahan","manujan","najafshahr","rafsanjan","ravar","shahr-e-babak","sirjan","zarand"]});
export const childModules = Object.freeze({"anar":"./anar/anar.js","anbarabad":"./anbarabad/anbarabad.js","baft":"./baft/baft.js","bam":"./bam/bam.js","baravat":"./baravat/baravat.js","bardsir":"./bardsir/bardsir.js","jiroft":"./jiroft/jiroft.js","kahnuj":"./kahnuj/kahnuj.js","mahan":"./mahan/mahan.js","manujan":"./manujan/manujan.js","najafshahr":"./najafshahr/najafshahr.js","rafsanjan":"./rafsanjan/rafsanjan.js","ravar":"./ravar/ravar.js","shahr-e-babak":"./shahr-e-babak/shahr-e-babak.js","sirjan":"./sirjan/sirjan.js","zarand":"./zarand/zarand.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
