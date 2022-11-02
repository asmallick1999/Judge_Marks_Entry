const candidates = [
    {
        "SL": "1",
        "Tag_No": "102",
        "Marks": "<input type='number' onchange='saveMarksLS(this)' name='2' step='0.01' min='0' max='10' class='form-control border border-dark' placeholder='Max 10' aria-describedby='basic-addon1' required>",
        "Name": "Ismail Sarkar"
    },
    {
        "SL": "2",
        "Tag_No": "553",
        "Marks": "<input type='number' onchange='saveMarksLS(this)' name='10' step='0.01' min='0' max='10' class='form-control border border-dark' placeholder='Max 10' aria-describedby='basic-addon1' required>",
        "Name": "ROHIT ROY"
    },
    {
        "SL": "3",
        "Tag_No": "554",
        "Marks": "<input type='number' onchange='saveMarksLS(this)' name='11' step='0.01' min='0' max='10' class='form-control border border-dark' placeholder='Max 10' aria-describedby='basic-addon1' required>",
        "Name": "SAYAN SAHA"
    },
    {
        "SL": "4",
        "Tag_No": "555",
        "Marks": "<input type='number' onchange='saveMarksLS(this)' name='12' step='0.01' min='0' max='10' class='form-control border border-dark' placeholder='Max 10' aria-describedby='basic-addon1' required>",
        "Name": "RAHUL DAS"
    },
    {
        "SL": "5",
        "Tag_No": "1256",
        "Marks": "<input type='number' onchange='saveMarksLS(this)' name='11423' step='0.01' min='0' max='10' class='form-control border border-dark' placeholder='Max 10' aria-describedby='basic-addon1' required>",
        "Name": "Ismail Sarkar"
    }
]

function myFunction() {

    for (i of candidates) {

        const candidateVal = document.createElement('div');
        candidateVal.classList.add("candidates")
        document.getElementById('main-div').appendChild(candidateVal)
        candidateVal.setAttribute("id", `idCandidate${i.SL}`);
        candidateVal.innerHTML = `<div class="candidate">
                            <h2>${i.SL}</h2>
                            <p>${i.Tag_No}</p>

                            ${i.Marks}
                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked${i.SL}(5.5)">
                                <div class="radio-tile">
                                    <label >5.5</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked${i.SL}(6)">
                                <div class="radio-tile">
                                    <label >6</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked${i.SL}(6.5)">
                                <div class="radio-tile">
                                    <label >6.5</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked${i.SL}(7)">
                                <div class="radio-tile">
                                    <label >7</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked${i.SL}(7.5)">
                                <div class="radio-tile">
                                    <label >7.5</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked${i.SL}(8)">
                                <div class="radio-tile">
                                    <label >8</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked${i.SL}(8.5)">
                                <div class="radio-tile">
                                    <label >8.5</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked${i.SL}(9)">
                                <div class="radio-tile">
                                    <label >9</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked${i.SL}(9.5)">
                                <div class="radio-tile">
                                    <label >9.5</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked${i.SL}(10)">
                                <div class="radio-tile">
                                    <label >10</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked${i.SL}(0)">
                                <div class="radio-tile">
                                    <label >0</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked${i.SL}(5)">
                                <div class="radio-tile">
                                    <label >5</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked${i.SL}(4)">
                                <div class="radio-tile">
                                    <label >4</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked${i.SL}(3)">
                                <div class="radio-tile">
                                    <label >3</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked${i.SL}(2)">
                                <div class="radio-tile">
                                    <label >2</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked${i.SL}(1)">
                                <div class="radio-tile">
                                    <label >1</label>
                                </div>
                            </div>
                        </div>  `
    }
    // if you add any input tage then please update the unmber below
}

// Connection with Button and Input Box

function btnClicked1(val) {
    document.getElementsByTagName('input')[0].value = val;
    document.getElementsByTagName('input')[0].style.transform = "scale(1.3)";
    document.getElementsByTagName('input')[0].style.fontSize = "2.1rem";
    document.getElementsByTagName('input')[0].style.background = "#ffff008a";
    setTimeout(() => {
        document.getElementsByTagName('input')[0].style.transform = "scale(1)"
        document.getElementsByTagName('input')[0].style.fontSize = "1.6rem";
        // document.getElementsByTagName('input')[0].style.background = "white";

    }, 400);
}
function btnClicked2(val) {
    document.getElementsByTagName('input')[17].value = val; // please update the number if you change add or remove any input tag

    document.getElementsByTagName('input')[17].style.transform = "scale(1.3)";
    document.getElementsByTagName('input')[17].style.fontSize = "2.1rem";
    document.getElementsByTagName('input')[17].style.background = "rgb(255 206 206 / 86%)";
    setTimeout(() => {
        document.getElementsByTagName('input')[17].style.transform = "scale(1)"
        document.getElementsByTagName('input')[17].style.fontSize = "1.6rem";
        // document.getElementsByTagName('input')[17].style.background = "white";

    }, 400);
}
function btnClicked3(val) {
    document.getElementsByTagName('input')[34].value = val; // please update the number if you change add or remove any input tag

    document.getElementsByTagName('input')[34].style.transform = "scale(1.3)";
    document.getElementsByTagName('input')[34].style.fontSize = "2.1rem";
    document.getElementsByTagName('input')[34].style.background = "rgb(215 254 159 / 95%)";
    setTimeout(() => {
        document.getElementsByTagName('input')[34].style.transform = "scale(1)";
        document.getElementsByTagName('input')[34].style.fontSize = "1.6rem";
        // document.getElementsByTagName('input')[17].style.background = "white";

    }, 400);
}
function btnClicked4(val) {
    document.getElementsByTagName('input')[51].value = val; // please update the number if you change add or remove any input tag

    document.getElementsByTagName('input')[51].style.transform = "scale(1.3)";
    document.getElementsByTagName('input')[51].style.fontSize = "2.1rem";
    document.getElementsByTagName('input')[51].style.background = "rgb(255 198 243 / 51%)";
    setTimeout(() => {
        document.getElementsByTagName('input')[51].style.transform = "scale(1)"
        document.getElementsByTagName('input')[51].style.fontSize = "1.6rem";
        // document.getElementsByTagName('input')[17].style.background = "white";

    }, 400);
}
function btnClicked5(val) {
    document.getElementsByTagName('input')[68].value = val; // please update the number if you change add or remove any input tag

    document.getElementsByTagName('input')[68].style.transform = "scale(1.3)";
    document.getElementsByTagName('input')[68].style.fontSize = "2.1rem";
    document.getElementsByTagName('input')[68].style.background = "#d3ffed";
    setTimeout(() => {
        document.getElementsByTagName('input')[68].style.transform = "scale(1)";
        document.getElementsByTagName('input')[68].style.fontSize = "1.6rem";
        // document.getElementsByTagName('input')[17].style.background = "white";

    }, 400);
}
function btnClicked6(val) {
    document.getElementsByTagName('input')[85].value = val;

    document.getElementsByTagName('input')[85].style.transform = "scale(1.3)";
    document.getElementsByTagName('input')[85].style.fontSize = "2.1rem";
    document.getElementsByTagName('input')[85].style.background = "#ffff008a";
    setTimeout(() => {
        document.getElementsByTagName('input')[85].style.transform = "scale(1)"
        document.getElementsByTagName('input')[85].style.fontSize = "1.6rem";
        // document.getElementsByTagName('input')[17].style.background = "white";

    }, 400);
}
function btnClicked7(val) {
    document.getElementsByTagName('input')[102].value = val;

    document.getElementsByTagName('input')[102].style.transform = "scale(1.3)";
    document.getElementsByTagName('input')[102].style.fontSize = "2.1rem";
    document.getElementsByTagName('input')[102].style.background = "rgb(255 206 206 / 86%)";
    setTimeout(() => {
        document.getElementsByTagName('input')[102].style.transform = "scale(1)"
        document.getElementsByTagName('input')[102].style.fontSize = "1.6rem";
        // document.getElementsByTagName('input')[17].style.background = "white";

    }, 400);
}
function btnClicked8(val) {
    document.getElementsByTagName('input')[119].value = val;

    document.getElementsByTagName('input')[119].style.transform = "scale(1.3)";
    document.getElementsByTagName('input')[119].style.fontSize = "2.1rem";
    document.getElementsByTagName('input')[119].style.background = "rgb(215 254 159 / 95%)";
    setTimeout(() => {
        document.getElementsByTagName('input')[119].style.transform = "scale(1)"
        document.getElementsByTagName('input')[119].style.fontSize = "1.6rem";
        // document.getElementsByTagName('input')[17].style.background = "white";

    }, 400);
}
function btnClicked9(val) {
    document.getElementsByTagName('input')[136].value = val;

    document.getElementsByTagName('input')[136].style.transform = "scale(1.3)";
    document.getElementsByTagName('input')[136].style.fontSize = "2.1rem";
    document.getElementsByTagName('input')[136].style.background = "rgb(255 198 243 / 51%)";
    setTimeout(() => {
        document.getElementsByTagName('input')[136].style.transform = "scale(1)"
        document.getElementsByTagName('input')[85].style.fontSize = "1.6rem";
        // document.getElementsByTagName('input')[17].style.background = "white";

    }, 400);
}
function btnClicked10(val) {
    document.getElementsByTagName('input')[153].value = val;

    document.getElementsByTagName('input')[153].style.transform = "scale(1.3)";
    document.getElementsByTagName('input')[153].style.fontSize = "2.1rem";
    document.getElementsByTagName('input')[153].style.background = "#d3ffed";
    setTimeout(() => {
        document.getElementsByTagName('input')[153].style.transform = "scale(1)"
        document.getElementsByTagName('input')[153].style.fontSize = "1.6rem";
        // document.getElementsByTagName('input')[17].style.background = "white";

    }, 400);
}
function btnClicked11(val) {
    document.getElementsByTagName('input')[170].value = val;

    document.getElementsByTagName('input')[170].style.transform = "scale(1.3)";
    document.getElementsByTagName('input')[170].style.fontSize = "2.1rem";
    document.getElementsByTagName('input')[170].style.background = "#ffff008a";
    setTimeout(() => {
        document.getElementsByTagName('input')[170].style.transform = "scale(1)"
        document.getElementsByTagName('input')[170].style.fontSize = "1.6rem";
        // document.getElementsByTagName('input')[17].style.background = "white";

    }, 400);
}
function btnClicked12(val) {
    document.getElementsByTagName('input')[187].value = val;

    document.getElementsByTagName('input')[187].style.transform = "scale(1.3)";
    document.getElementsByTagName('input')[187].style.fontSize = "2.1rem";
    document.getElementsByTagName('input')[187].style.background = "rgb(255 206 206 / 86%)";
    setTimeout(() => {
        document.getElementsByTagName('input')[187].style.transform = "scale(1)"
        document.getElementsByTagName('input')[187].style.fontSize = "1.6rem";
        // document.getElementsByTagName('input')[17].style.background = "white";

    }, 400);
}
function btnClicked13(val) {
    document.getElementsByTagName('input')[204].value = val;

    document.getElementsByTagName('input')[204].style.transform = "scale(1.3)";
    document.getElementsByTagName('input')[204].style.fontSize = "2.1rem";
    document.getElementsByTagName('input')[204].style.background = "rgb(215 254 159 / 95%)";
    setTimeout(() => {
        document.getElementsByTagName('input')[204].style.transform = "scale(1)"
        document.getElementsByTagName('input')[204].style.fontSize = "1.6rem";
        // document.getElementsByTagName('input')[17].style.background = "white";

    }, 400);
}
function btnClicked14(val) {
    document.getElementsByTagName('input')[221].value = val;

    document.getElementsByTagName('input')[221].style.transform = "scale(1.3)";
    document.getElementsByTagName('input')[221].style.fontSize = "2.1rem";
    document.getElementsByTagName('input')[221].style.background = "rgb(255 198 243 / 51%)";
    setTimeout(() => {
        document.getElementsByTagName('input')[221].style.transform = "scale(1)"
        document.getElementsByTagName('input')[221].style.fontSize = "1.6rem";
        // document.getElementsByTagName('input')[17].style.background = "white";

    }, 400);
}
function btnClicked15(val) {
    document.getElementsByTagName('input')[238].value = val;

    document.getElementsByTagName('input')[238].style.transform = "scale(1.3)";
    document.getElementsByTagName('input')[238].style.fontSize = "2.1rem";
    document.getElementsByTagName('input')[238].style.background = "#d3ffed";
    setTimeout(() => {
        document.getElementsByTagName('input')[238].style.transform = "scale(1)"
        document.getElementsByTagName('input')[238].style.fontSize = "1.6rem";
        // document.getElementsByTagName('input')[17].style.background = "white";

    }, 400);
}
function btnClicked16(val) {
    document.getElementsByTagName('input')[255].value = val;

    document.getElementsByTagName('input')[255].style.transform = "scale(1.3)";
    document.getElementsByTagName('input')[255].style.fontSize = "2.1rem";
    document.getElementsByTagName('input')[255].style.background = "#ffff008a";
    setTimeout(() => {
        document.getElementsByTagName('input')[255].style.transform = "scale(1)"
        document.getElementsByTagName('input')[255].style.fontSize = "1.6rem";
        // document.getElementsByTagName('input')[17].style.background = "white";

    }, 400);
}
function btnClicked17(val) {
    document.getElementsByTagName('input')[272].value = val;

    document.getElementsByTagName('input')[272].style.transform = "scale(1.3)";
    document.getElementsByTagName('input')[272].style.fontSize = "2.1rem";
    document.getElementsByTagName('input')[272].style.background = "rgb(255 206 206 / 86%)";
    setTimeout(() => {
        document.getElementsByTagName('input')[272].style.transform = "scale(1)"
        document.getElementsByTagName('input')[272].style.fontSize = "1.6rem";
        // document.getElementsByTagName('input')[17].style.background = "white";

    }, 400);
}
function btnClicked18(val) {
    document.getElementsByTagName('input')[289].value = val;

    document.getElementsByTagName('input')[289].style.transform = "scale(1.3)";
    document.getElementsByTagName('input')[289].style.fontSize = "2.1rem";
    document.getElementsByTagName('input')[289].style.background = "rgb(215 254 159 / 95%)";
    setTimeout(() => {
        document.getElementsByTagName('input')[289].style.transform = "scale(1)"
        document.getElementsByTagName('input')[289].style.fontSize = "1.6rem";
        // document.getElementsByTagName('input')[17].style.background = "white";

    }, 400);
}
function btnClicked19(val) {
    document.getElementsByTagName('input')[306].value = val;

    document.getElementsByTagName('input')[306].style.transform = "scale(1.3)";
    document.getElementsByTagName('input')[306].style.fontSize = "2.1rem";
    document.getElementsByTagName('input')[306].style.background = "rgb(255 198 243 / 51%)";
    setTimeout(() => {
        document.getElementsByTagName('input')[306].style.transform = "scale(1)"
        document.getElementsByTagName('input')[306].style.fontSize = "1.6rem";
        // document.getElementsByTagName('input')[17].style.background = "white";

    }, 400);
}
function btnClicked20(val) {
    document.getElementsByTagName('input')[323].value = val;

    document.getElementsByTagName('input')[323].style.transform = "scale(1.3)";
    document.getElementsByTagName('input')[323].style.fontSize = "2.1rem";
    document.getElementsByTagName('input')[323].style.background = "#d3ffed";
    setTimeout(() => {
        document.getElementsByTagName('input')[323].style.transform = "scale(1)"
        document.getElementsByTagName('input')[323].style.fontSize = "1.6rem";
        // document.getElementsByTagName('input')[17].style.background = "white";

    }, 400);
}
function btnClicked21(val) {
    document.getElementsByTagName('input')[340].value = val;

    document.getElementsByTagName('input')[340].style.transform = "scale(1.3)";
    document.getElementsByTagName('input')[340].style.fontSize = "2.1rem";
    document.getElementsByTagName('input')[340].style.background = "#ffff008a";
    setTimeout(() => {
        document.getElementsByTagName('input')[340].style.transform = "scale(1)"
        document.getElementsByTagName('input')[340].style.fontSize = "1.6rem";
        // document.getElementsByTagName('input')[17].style.background = "white";

    }, 400);
}
function btnClicked22(val) {
    document.getElementsByTagName('input')[357].value = val;

    document.getElementsByTagName('input')[357].style.transform = "scale(1.3)";
    document.getElementsByTagName('input')[357].style.fontSize = "2.1rem";
    document.getElementsByTagName('input')[357].style.background = "rgb(255 206 206 / 86%)";
    setTimeout(() => {
        document.getElementsByTagName('input')[357].style.transform = "scale(1)"
        document.getElementsByTagName('input')[357].style.fontSize = "1.6rem";
        // document.getElementsByTagName('input')[17].style.background = "white";

    }, 400);
}
function btnClicked23(val) {
    document.getElementsByTagName('input')[374].value = val;

    document.getElementsByTagName('input')[374].style.transform = "scale(1.3)";
    document.getElementsByTagName('input')[374].style.fontSize = "2.1rem";
    document.getElementsByTagName('input')[374].style.background = "rgb(215 254 159 / 95%)";
    setTimeout(() => {
        document.getElementsByTagName('input')[374].style.transform = "scale(1)"
        document.getElementsByTagName('input')[374].style.fontSize = "1.6rem";
        // document.getElementsByTagName('input')[17].style.background = "white";

    }, 400);
}
function btnClicked24(val) {
    document.getElementsByTagName('input')[391].value = val;

    document.getElementsByTagName('input')[391].style.transform = "scale(1.3)";
    document.getElementsByTagName('input')[391].style.fontSize = "2.1rem";
    document.getElementsByTagName('input')[391].style.background = "rgb(255 198 243 / 51%)";
    setTimeout(() => {
        document.getElementsByTagName('input')[391].style.transform = "scale(1)"
        document.getElementsByTagName('input')[391].style.fontSize = "1.6rem";
        // document.getElementsByTagName('input')[17].style.background = "white";

    }, 400);
}
function btnClicked25(val) {
    document.getElementsByTagName('input')[408].value = val;

    document.getElementsByTagName('input')[408].style.transform = "scale(1.3)";
    document.getElementsByTagName('input')[408].style.fontSize = "2.1rem";
    document.getElementsByTagName('input')[408].style.background = "#d3ffed";
    setTimeout(() => {
        document.getElementsByTagName('input')[408].style.transform = "scale(1)"
        document.getElementsByTagName('input')[408].style.fontSize = "1.6rem";
        // document.getElementsByTagName('input')[17].style.background = "white";

    }, 400);
}
function btnClicked26(val) {
    document.getElementsByTagName('input')[425].value = val;

    document.getElementsByTagName('input')[425].style.transform = "scale(1.3)";
    document.getElementsByTagName('input')[425].style.fontSize = "2.1rem";
    document.getElementsByTagName('input')[425].style.background = "#ffff008a";
    setTimeout(() => {
        document.getElementsByTagName('input')[425].style.transform = "scale(1)"
        document.getElementsByTagName('input')[425].style.fontSize = "1.6rem";
        // document.getElementsByTagName('input')[17].style.background = "white";

    }, 400);
}
function btnClicked27(val) {
    document.getElementsByTagName('input')[442].value = val;

    document.getElementsByTagName('input')[442].style.transform = "scale(1.3)";
    document.getElementsByTagName('input')[442].style.fontSize = "2.1rem";
    document.getElementsByTagName('input')[442].style.background = "rgb(255 206 206 / 86%)";
    setTimeout(() => {
        document.getElementsByTagName('input')[442].style.transform = "scale(1)"
        document.getElementsByTagName('input')[442].style.fontSize = "1.6rem";
        // document.getElementsByTagName('input')[17].style.background = "white";

    }, 400);
}


function save() {
    alert("SAVED")
}
