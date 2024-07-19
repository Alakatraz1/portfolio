$(".button1").click(()=>{
    $(".part2")[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "start" // or "end"
    });
})