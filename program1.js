
let Name = "An"
let Classes = ["CF", "ST", "ACC", "GVT", "QBA"]
let String = "hello! my name is " + Name + " and I am taking " 
for(let Index in Classes){
if (Index < Classes.length - 1){
    String += Classes[Index] + ", ";
    } else {
    String += "and " + Classes[Index] + ".";
    }
}
console.log(String)
