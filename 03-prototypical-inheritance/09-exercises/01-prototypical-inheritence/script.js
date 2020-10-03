function HtmlElement() {
    this.click = function () {
        return 'clicked';
    }
}

HtmlElement.prototype.focus = function() {
    return 'focued';
};

function HtmlSelectElement(items = []) {
    this.items = items;

    this.addItem = function (item) {
        this.items.push(item);
    }

    this.removeItem = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    }
}

// This creates empty object
// HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement();

const selectElement = new HtmlSelectElement();

console.log(selectElement.click());
console.log(selectElement.focus());
