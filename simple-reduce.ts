    var result = [1, 2, 3].reduce(function (total,current) {
        return total + current;
        }, 0); 
    console.log(result);
    

    var result = [1,2, 3].reduce((total, current) => total + current, 0);
    
    console.log(result);
    
  
    
    var even = [3, 1, 56, 7].filter(el => !(el % 2));
    console.log(even);
    
 
function MyComponent() {
    this.age = 42;
    setTimeout(() => {
        this.age += 1;
    console.log(this.age);
        }, 100);
}
    
    new MyComponent();