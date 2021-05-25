// if else nesting

// var money = prompt()

// if (money >= 10) {
//     document.write("i will buy chocolate")
// } else {
//     document.write("i will buy candy")
// }


// money >= 10 ? document.write("i will buy chocolate") : document.write("i will buy candy")

var raining = true
var HeavyRaining = false
var mud = true

if (raining) {
    document.write("I ll take umbrella </br>")
    if (HeavyRaining) {
        document.write("i ll take raincoat also bcoz its raining heavy </br>")
        if (mud) {
            document.write("i ll take MY long boot bcoz of mud on the road")
        } else {
            document.write("i ll not take my long boots")

        }
    } else(
        document.write("i 'll not take raincoat bcoz its not raining heavy")

    )

} else {
    document.write("I ll not take umbrella")

}