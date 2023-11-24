let a = "hello world !";

function show(srt) {
    let srting = srt.split(" ").map((word) => {
        return word.charAt(0).toLowerCase() + word.slice(1);
    }).join(" ")
    
    setTimeout(() => {
        console.log(srting)
    }, 1000);
} 

show(a)