class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
       return 2 * this.radius;
    }
    get circumference() {
        return 2 * Math.PI * this.radius;
    }

    get area() {
        return Math.PI * this.radius * this.radius;
    }

    set diameter(diameter) {
        this.radius = diameter/2;
    }

    set circumference(circumference) {
        this.radius = circumference / 2 / Math.PI;
    }

    set area(area) {
        let radiusSquared = area / Math.PI;
        this.radius = Math.sqrt(radiusSquared);
    }
}