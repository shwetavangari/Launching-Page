function task(){
    var today=new Date()
    var targetDate=new Date("11/15/2023 15:00:00")
    var differ=(targetDate-today)/1000

    var days=Math.floor(differ/3600/24)
    var hours=Math.floor((differ/3600)%24)
    var minutes=Math.floor((differ/60)%24)
    var seconds=Math.floor(differ%60)

    var result=document.querySelectorAll(".boxes h1")
    // result.style.transform="ScaleX(1.3)"
    result[0].innerHTML=days
    result[1].innerHTML=hours
    result[2].innerHTML=minutes
    result[3].innerHTML=seconds
}

setInterval(task,100)