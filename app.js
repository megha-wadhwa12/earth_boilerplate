var bodyvar=document.body
console.log("bodyvar: "  ,bodyvar)

var climate = document.getElementById("climate")
console.log("climate: ",climate);
var consumption = document.getElementById("consumption")
console.log("consumption: ",consumption);
var resources = document.getElementById("resources")
console.log("resources: ",resources);
var people = document.getElementById("people")
console.log("people: ", people);

//save text
var saveText = document.getElementById("save")

//iframe
var frame = document.getElementById("frame")

consumption.onclick=()=>{


//background
bodyvar.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png')"
bodyvar.style.backgroundSize= "100% 100%"

climate.style.background = ("transparent")
resources.style.background = ("transparent")
people.style.background = ("transparent")


//frame
frame.src="https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

saveText.innerHTML= "Do your bit! Shop only what you need,eat only what you need and always save the leftovers."

//buttons
consumption.style.background= "#27AE60"
}

climate.onclick=()=>{

//background
bodyvar.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png')"

consumption.style.background = ("transparent")
resources.style.background = ("transparent")
people.style.background = ("transparent")

bodyvar.style.backgroundSize = "100% 100%"

//frame
frame.src = "https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

saveText.innerHTML = ("Do your bit! Save trees, use renewable energy sources and prefer to travel green")

//buttons
climate.style.background="#357DD7"
}

resources.onclick=()=>{

//background
bodyvar.style.background ="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png')"
bodyvar.style.backgroundSize="100% 100%"

climate.style.background = ("transparent")
consumption.style.background = ("transparent")
people.style.background = ("transparent")

//frame 
frame.src = "https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

saveText.innerHTML = (' Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle')

//buttons
resources.style.background="#EB9455"
}

people.onclick=()=>{



//Background
bodyvar.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png')"
bodyvar.style.backgroundSize = "100% 100%"

climate.style.background = ("transparent")
resources.style.background = ("transparent")
consumption.style.background = ("transparent")

//frame
frame.src = "https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

saveText.innerHTML = (" Do your bit! Never waste  food.Rather offer it to people or animals who are in need")

//buttons
people.style.background="#DD4855"

}
