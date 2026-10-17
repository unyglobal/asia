// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rajapalayam","repository":"asia","path":"india/tamil-nadu/rajapalayam","depth":3,"parent":"india/tamil-nadu","children":["janappakudi","sankararaiakottai","sarvasamudram","sarvasamudram-agraharam","vadakkuvenganallur","vadamalaipuram","vayalkattupatti"]});
export const childModules = Object.freeze({"janappakudi":"./janappakudi/janappakudi.js","sankararaiakottai":"./sankararaiakottai/sankararaiakottai.js","sarvasamudram":"./sarvasamudram/sarvasamudram.js","sarvasamudram-agraharam":"./sarvasamudram-agraharam/sarvasamudram-agraharam.js","vadakkuvenganallur":"./vadakkuvenganallur/vadakkuvenganallur.js","vadamalaipuram":"./vadamalaipuram/vadamalaipuram.js","vayalkattupatti":"./vayalkattupatti/vayalkattupatti.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
