
class Person {
    constructor(name, place, degree, college, institute, cource,) {
        this.name = name;
        this.place = place;
        this.degree = degree;
        this.college = college;
        this.institute = institute;
        this.cource = cource;
        
    }
    getPersonDetails() {
        return `

My name is ${this.name},iam from ${this.place},I have completed ${this.degree} at ${this.college} and iam currently enrolled on ${this.institute}
for ${this.cource} `
    }
}
let detail = new Person("Sachin", "pollachi", "M.S.W", "N.G.M", "GUVI", "Full Stack Development", );
console.log(detail.getPersonDetails());


/*
Output

My name is Sachin,iam from pollachi,I have completed M.S.W at N.G.M and iam currently enrolled on GUVI
for Full Stack Development

*/