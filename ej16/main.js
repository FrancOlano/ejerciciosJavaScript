


$('#btn1').click(function () { 
    $('#p').toggleClass('red')
    
});

const p = document.getElementById('p2')
const btn2 = document.getElementById('btn2');
btn2.onclick = function(){
    p.classList.toggle("blue")
}