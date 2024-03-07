class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
  
    getRadius() {
      return `Radius: ${this.radius}`;
    }
  
    set changeRadius(newRadius) {
      this.radius = newRadius;
    }
  
    getColor() {
      return `Color: ${this.color}`;
    }
  
    set changeColor(newColor) {
      this.color = newColor;
    }
  
    getArea() {
      return Math.PI * Math.pow(this.radius, 2); 
    }
  
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  let circle = new Circle(1.0, "red"); 
  circle.changeRadius = 3.0; 
  circle.changeColor = "pink"; 
  console.log(circle.getRadius());
  console.log(circle.getColor());
  console.log(circle.getArea().toFixed(2)); 
  console.log(circle.getCircumference().toFixed(2)); 


  /*
  Output:

  Radius: 3
Color: pink
  28.27
 18.85
  */