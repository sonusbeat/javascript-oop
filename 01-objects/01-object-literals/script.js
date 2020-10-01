const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('Function:', 'executed');
    }
};

console.log('radius:', circle.radius);
console.log('location x:', circle.location.x);
console.log('location y:', circle.location.y);

circle.draw();