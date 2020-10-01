function Circle() {
    this.radius = 0;

    let defaultLocation = { x: 0, y: 0 };

    // Getter
    this.getDefaultLocation = function () {
        return defaultLocation;
    };

    this.exe = function () {
        return 'Executed!';
    };

    // Getters and Setters
    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
           return defaultLocation; 
        },
        set: function(value) {
            if (!value.x || !value.y)
                throw new Error('Invalid Location!');
            
            defaultLocation = value;
        } 
    });
}

const circle = new Circle();

// circle.defaultLocation = 1; //>Throw an error

circle.defaultLocation = { x: 1, y: 1 };

console.log(circle.defaultLocation.x);
console.log(circle.defaultLocation.y);