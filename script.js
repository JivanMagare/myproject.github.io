

alert("This website is specially designed for Laptop, PC. If you want to use all the features of this website then use laptop or PC.");

document.getElementById("1stLink").onclick = function () {
   
    let getInput = confirm("If you want to visit my project then press OK button !!");

    if( getInput == true )
    {
        window.open('https://jivanmagare.github.io/QuizWebapp.github.io/','_blank');
    }
    
}