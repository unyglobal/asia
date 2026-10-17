// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rajshahi-division","repository":"asia","path":"bangladesh/rajshahi-division","depth":2,"parent":"bangladesh","children":["bera","bogra","ishwardi","joypur-hat","mohammadpur","natore","nawabganj","pabna","par-naogaon","puthia","rajshahi","shahzadpur","sirajganj"]});
export const childModules = Object.freeze({"bera":"./bera/bera.js","bogra":"./bogra/bogra.js","ishwardi":"./ishwardi/ishwardi.js","joypur-hat":"./joypur-hat/joypur-hat.js","mohammadpur":"./mohammadpur/mohammadpur.js","natore":"./natore/natore.js","nawabganj":"./nawabganj/nawabganj.js","pabna":"./pabna/pabna.js","par-naogaon":"./par-naogaon/par-naogaon.js","puthia":"./puthia/puthia.js","rajshahi":"./rajshahi/rajshahi.js","shahzadpur":"./shahzadpur/shahzadpur.js","sirajganj":"./sirajganj/sirajganj.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
