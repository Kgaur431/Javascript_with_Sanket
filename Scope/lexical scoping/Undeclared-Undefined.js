var teacher = "Kartik";
function fun() {
    var teacher = "Gour";
    sir = "Gour"; // this is a global variable, because we have not declared it using var, let or const
    console.log(teacher);
}
function fun2() {
    console.log(subject);
    var subject = "Javascript";
    console.log(teacher);
}

console.log(teacher);
fun();
fun2();
