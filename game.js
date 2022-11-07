document.getElementById("level").disabled = true;
let temp = document.getElementById("decrement").innerHTML;
const level1 = document.querySelector('.easy1')
const level2 = document.querySelector('.easy2')
const level3 = document.querySelector('.medium1')
const level4 = document.querySelector('.medium2')
const level5 = document.querySelector('.hard')
function generate() {
    let x = Math.floor((Math.random() * 100) + 1);
    document.getElementById("p2").innerHTML = "Raja Chose His Lucky Number. GUESS IT!";
    document.getElementById("demo1").innerHTML = x;
    document.getElementById("myBtn").disabled = true;
    document.getElementById("level").disabled = true;
}
function Match() {
    let guess = document.getElementById("exampleInputEmail1").value;
    let y = document.getElementById("demo1").innerHTML;
    if (guess != y) {
        let count = document.getElementById("decrement").innerHTML;
        document.getElementById("decrement").innerHTML = count - 1;
        if (guess > y) {
            document.getElementById("demo2").innerHTML = guess + " is greater than Lucky Number  🙁";
            document.getElementById("exampleInputEmail1").value = '';

        }
        else if (guess < y) {
            document.getElementById("demo2").innerHTML = guess + " is smaller than Lucky Number  🙁";
            document.getElementById("exampleInputEmail1").value = '';
        }
        if (document.getElementById("decrement").innerHTML == 0) {
            document.getElementById("demo2").innerHTML = "You Lost";
            document.getElementById("myBtn").disabled = false;
            document.getElementById("guess").disabled = true;
            document.getElementById("p2").innerHTML = "..........";
            document.getElementById("exampleInputEmail1").value = '';

        }
    }
    else {
        document.getElementById("decrement").innerHTML = document.getElementById("decrement").innerHTML;
        document.getElementById("demo2").innerHTML = "YAAYYY 🥳🥳🥳.. You Guessed it Right.. Level Over";
        document.getElementById("level").disabled = false;
        document.getElementById("exampleInputEmail1").value = '';
    }
}
function Restart() {
    document.getElementById("guess").disabled = false;
    document.getElementById("decrement").innerHTML = "10";
    document.getElementById("demo2").innerHTML = "Let's Go!";
    document.getElementById("p2").innerHTML = "..........";
    document.getElementById("exampleInputEmail1").value = '';
}
function level() {
    if(level1.classList.contains('active')) {
        level1.classList.remove('active');
        level2.classList.add('active');
        document.getElementById("decrement").innerHTML = "7";
        generate();
    }
    else if(level2.classList.contains('active')) {
        level2.classList.remove('active');
        level3.classList.add('active');
        document.getElementById("decrement").innerHTML = "5";
        generate();
    }
    else if(level3.classList.contains('active')) {
        level3.classList.remove('active');
        level4.classList.add('active');
        document.getElementById("decrement").innerHTML = "3";
        generate();
    }
    else if(level4.classList.contains('active')) {
        level4.classList.remove('active');
        level5.classList.add('active');
        document.getElementById("decrement").innerHTML = "1";
        generate();
    }
}

function modal() {
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
        document.getElementById("ans").innerHTML = "Sorry! The Number is " + document.getElementById("demo1").innerHTML;
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

var input = document.getElementById("exampleInputEmail1");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("guess").click();
    }
});
