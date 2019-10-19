const circle = {
    radius: 2,
    get area() {
        // this is the formula of find are of a redius 
        return Math.PI * this.radius * this.radius
    }
};
console.log(circle.area);