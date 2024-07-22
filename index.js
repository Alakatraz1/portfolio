$(".button1").click(()=>{
    $(".container")[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "start" // or "end"
    });
})
$(".button2").click(()=>{
    $(".container")[1].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "start" // or "end"
    });
})
$(".button3").click(()=>{
    $(".container")[2].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "start" // or "end"
    });
})
$(".button4").click(()=>{
    $(".container")[3].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "start" // or "end"
    });
})