function Popup(data = {}) {
  Object.keys(data).map((key) => (this[key] = data[key]));
}

Popup.prototype.renderPopup = function ({ type, text }) {
  if (type && type !== "error " && type !== "success" && type !== "warning")
    throw new Error("Enter Valid type options: warning,success,error");
  else this.type = type;
  if (text && typeof text !== "string")
    throw new Error("Text must be a string");
  else this.text = text;
  this.createdElement = document.querySelector(".popup-wrapper");
  if (!this.createdElement) {
    this.createdElement = document.createElement("div");
    this.createdElement.className = "popup-wrapper";
    this.createdElement.setAttribute("style", "position:fixed;top:0;right:0;");
    this.body = document.querySelector("body");
    this.body.appendChild(this.createdElement);
  }
  this.appendError();
};

Popup.prototype.appendError = function () {
  let element = document.createElement("div");
  element.textContent = this.text;
  if (this.type === "success")
    element.setAttribute("style", this.successStyle());
  else if (this.type === "error")
    element.setAttribute("style", this.errorStyle());
  else if (this.type === "warning")
    element.setAttribute("style", this.warningStyle());
  this.createdElement.appendChild(element);
  setTimeout(() => {
    this.createdElement.removeChild(element);
  }, 3000);
};
Popup.prototype.successStyle = function () {
  return "width:300px;display:flex;justify-content:center;align-items:center;background:green;color:white;padding:20px;margin-bottom:10px;";
};
Popup.prototype.errorStyle = function () {
  return "width:300px;display:flex;justify-content:center;align-items:center;background:red;color:white;padding:20px;margin-bottom:10px;";
};
Popup.prototype.warningStyle = function () {
  return "width:300px;display:flex;justify-content:center;align-items:center;background:yellow;color:black;padding:20px;margin-bottom:10px;";
};
const notify = new Popup({
  type: "success",
  text: "It was Successfull",
});

module.exports.notify = notify;
