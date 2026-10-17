// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bangladesh","repository":"asia","path":"bangladesh","depth":1,"parent":"","children":["barisal-division","chittagong","dhaka-division","khulna-division","mymensingh-division","rajshahi-division","rangpur-division","shibganj","shibganj-a","sylhet-division"]});
export const childModules = Object.freeze({"barisal-division":"./barisal-division/barisal-division.js","chittagong":"./chittagong/chittagong.js","dhaka-division":"./dhaka-division/dhaka-division.js","khulna-division":"./khulna-division/khulna-division.js","mymensingh-division":"./mymensingh-division/mymensingh-division.js","rajshahi-division":"./rajshahi-division/rajshahi-division.js","rangpur-division":"./rangpur-division/rangpur-division.js","shibganj":"./shibganj/shibganj.js","shibganj-a":"./shibganj-a/shibganj-a.js","sylhet-division":"./sylhet-division/sylhet-division.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
