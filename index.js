function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = function() {
        console.log(`Hello everybody, my year is ${this.year} whom you've been
mailing at ${this.color}!`);
    };
}