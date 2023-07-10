export default function Storage(property) {
  this.property = property;
}

Storage.prototype.getProperty = function () {
  return JSON.parse(localStorage.getItem(this.property));
};

Storage.prototype.setNewData = function (newValue) {
  localStorage.setItem(this.property, JSON.stringify(newValue));
};
