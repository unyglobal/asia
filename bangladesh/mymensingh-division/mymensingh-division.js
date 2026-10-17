// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mymensingh-division","repository":"asia","path":"bangladesh/mymensingh-division","depth":2,"parent":"bangladesh","children":["gafargaon","jamalpur","muktagacha","mymensingh","netrakona","sarishabari","sherpur"]});
export const childModules = Object.freeze({"gafargaon":"./gafargaon/gafargaon.js","jamalpur":"./jamalpur/jamalpur.js","muktagacha":"./muktagacha/muktagacha.js","mymensingh":"./mymensingh/mymensingh.js","netrakona":"./netrakona/netrakona.js","sarishabari":"./sarishabari/sarishabari.js","sherpur":"./sherpur/sherpur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
