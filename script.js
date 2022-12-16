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
    }
    
]


function myFunction() {
    if (candidates.length < 4) {
        const main_div = document.getElementById("main-div")
        main_div.classList.add('candidates-section-justify')
    }


    for (i of candidates) {

        const candidateVal = document.createElement('div');
        candidateVal.classList.add("candidates")
        document.getElementById('main-div').appendChild(candidateVal)
        candidateVal.setAttribute("id", `idCandidate${i.SL}`);
        candidateVal.innerHTML = `<div class="candidate" id="candidate_div${i.SL}">
                            <h2>${i.SL}</h2>
                            <p>${i.Tag_No}</p>
                            ${i.Marks}
                        </div>`
        const inp1 = document.getElementsByTagName('input')[0];
        const inputMaxValue = inp1.max
        if (inputMaxValue == 10) {
            let candidateDiv = document.getElementById(`candidate_div${i.SL}`)
            console.log(candidateDiv);
            candidateDiv.innerHTML = `
                <h2>${i.SL}</h2>
                            <p>${i.Tag_No}</p>
                         
                            ${i.Marks}
                            
            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(5.5,${i.SL})">
                                <div class="radio-tile">
                                    <label >5.5</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(6,${i.SL})">
                                <div class="radio-tile">
                                    <label >6</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(6.5,${i.SL})">
                                <div class="radio-tile">
                                    <label >6.5</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(7,${i.SL})">
                                <div class="radio-tile">
                                    <label >7</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(7.5,${i.SL})">
                                <div class="radio-tile">
                                    <label >7.5</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(8,${i.SL})">
                                <div class="radio-tile">
                                    <label >8</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(8.5,${i.SL})">
                                <div class="radio-tile">
                                    <label >8.5</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(9,${i.SL})">
                                <div class="radio-tile">
                                    <label >9</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(9.5,${i.SL})">
                                <div class="radio-tile">
                                    <label >9.5</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(10,${i.SL})">
                                <div class="radio-tile">
                                    <label >10</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(0,${i.SL})">
                                <div class="radio-tile">
                                    <label >0</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(5,${i.SL})">
                                <div class="radio-tile">
                                    <label >5</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(4,${i.SL})">
                                <div class="radio-tile">
                                    <label >4</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(3,${i.SL})">
                                <div class="radio-tile">
                                    <label >3</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(2,${i.SL})">
                                <div class="radio-tile">
                                    <label >2</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(1,${i.SL})">
                                <div class="radio-tile">
                                    <label >1</label>
                                </div>
                            </div>
                            
                                        `
        }
        else if (inputMaxValue == 5) {
            let candidateDiv = document.getElementById(`candidate_div${i.SL}`)
            console.log(candidateDiv);
            candidateDiv.innerHTML = `
                            <h2>${i.SL}</h2>
                            <p>${i.Tag_No}</p>

                            ${i.Marks}
                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(5,${i.SL})">
                                <div class="radio-tile">
                                    <label>5</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(4.5,${i.SL})">
                                <div class="radio-tile">
                                    <label >4.5</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(4,${i.SL})">
                                <div class="radio-tile">
                                    <label >4</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(3.5,${i.SL})">
                                <div class="radio-tile">
                                    <label >3.5</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(3,${i.SL})">
                                <div class="radio-tile">
                                    <label >3</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(2.5,${i.SL})">
                                <div class="radio-tile">
                                    <label >2.5</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(2,${i.SL})">
                                <div class="radio-tile">
                                    <label >2</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(1.5,${i.SL})">
                                <div class="radio-tile">
                                    <label >1.5</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(1,${i.SL})">
                                <div class="radio-tile">
                                    <label >1</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(0.5,${i.SL})">
                                <div class="radio-tile">
                                    <label >0.5</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(0,${i.SL})">
                                <div class="radio-tile">
                                    <label >0</label>
                                </div>
                            </div>
                                        `
        }
        else if (inputMaxValue == 15) {
            let candidateDiv = document.getElementById(`candidate_div${i.SL}`)
            console.log(candidateDiv);
            candidateDiv.innerHTML = `
                            <h2>${i.SL}</h2>
                            <p>${i.Tag_No}</p>

                            ${i.Marks}
                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(14,${i.SL})">
                                <div class="radio-tile">
                                    <label>14</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(13.5,${i.SL})">
                                <div class="radio-tile">
                                    <label>13.5</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(13,${i.SL})">
                                <div class="radio-tile">
                                    <label>13</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(12.5,${i.SL})">
                                <div class="radio-tile">
                                    <label>12.5</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(12,${i.SL})">
                                <div class="radio-tile">
                                    <label>12</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(11.5,${i.SL})">
                                <div class="radio-tile">
                                    <label>11.5</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(11,${i.SL})">
                                <div class="radio-tile">
                                    <label>11</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(10.5,${i.SL})">
                                <div class="radio-tile">
                                    <label>10.5</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(10,${i.SL})">
                                <div class="radio-tile">
                                    <label>10</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(9.5,${i.SL})">
                                <div class="radio-tile">
                                    <label>9.5</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(9,${i.SL})">
                                <div class="radio-tile">
                                    <label>9</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(8.5,${i.SL})">
                                <div class="radio-tile">
                                    <label>8.5</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(8,${i.SL})">
                                <div class="radio-tile">
                                    <label>8</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(0,${i.SL})">
                                <div class="radio-tile">
                                    <label>0</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(1,${i.SL})">
                                <div class="radio-tile">
                                    <label>1</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(2,${i.SL})">
                                <div class="radio-tile">
                                    <label >2</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(3,${i.SL})">
                                <div class="radio-tile">
                                    <label >3</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(4,${i.SL})">
                                <div class="radio-tile">
                                    <label >4</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(5,${i.SL})">
                                <div class="radio-tile">
                                    <label >5</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(6,${i.SL})">
                                <div class="radio-tile">
                                    <label >6</label>
                                </div>
                            </div>

                            <div class="input-container">
                                <input type="radio" name="radio${i.SL}" onclick="btnClicked(7,${i.SL})">
                                <div class="radio-tile">
                                    <label >7</label>
                                </div>
                            </div>
                                        `
        }
    }

    // if you add any input tage then please update the unmber below

}

// Connection with Button and Input Box

function btnClicked(val, num) {
    const serailNo = num - 1;
    const inp1 = document.getElementsByTagName('input')[0];
    const inputMaxValue = inp1.max
    if (inputMaxValue == 5) {
        const inputVal = 12
        document.getElementsByTagName('input')[inputVal * serailNo].value = val; // please update the number if you change add or remove any input tag

        document.getElementsByTagName('input')[inputVal * serailNo].style.transform = "scale(1.3)";
        document.getElementsByTagName('input')[inputVal * serailNo].style.fontSize = "2.1rem";
        document.getElementsByTagName('input')[inputVal * serailNo].style.background = `rgb(255 248 195 / 86%)`;
        setTimeout(() => {
            document.getElementsByTagName('input')[inputVal * serailNo].style.transform = "scale(1)"
            document.getElementsByTagName('input')[inputVal * serailNo].style.fontSize = "1.6rem";
            // document.getElementsByTagName('input')[17].style.background = "white";

        }, 300);
    }
    else if (inputMaxValue == 10) {
        const inputVal = 17
        document.getElementsByTagName('input')[inputVal * serailNo].value = val; // please update the number if you change add or remove any input tag

        document.getElementsByTagName('input')[inputVal * serailNo].style.transform = "scale(1.3)";
        document.getElementsByTagName('input')[inputVal * serailNo].style.fontSize = "2.1rem";
        document.getElementsByTagName('input')[inputVal * serailNo].style.background = `rgb(255 248 195 / 86%)`;
        setTimeout(() => {
            document.getElementsByTagName('input')[inputVal * serailNo].style.transform = "scale(1)"
            document.getElementsByTagName('input')[inputVal * serailNo].style.fontSize = "1.6rem";
            // document.getElementsByTagName('input')[17].style.background = "white";

        }, 300);
    }
    else if (inputMaxValue == 15) {
        const inputVal = 22
        document.getElementsByTagName('input')[inputVal * serailNo].value = val; // please update the number if you change add or remove any input tag

        document.getElementsByTagName('input')[inputVal * serailNo].style.transform = "scale(1.3)";
        document.getElementsByTagName('input')[inputVal * serailNo].style.fontSize = "2.1rem";
        document.getElementsByTagName('input')[inputVal * serailNo].style.background = `rgb(255 248 195 / 86%)`;
        setTimeout(() => {
            document.getElementsByTagName('input')[inputVal * serailNo].style.transform = "scale(1)"
            document.getElementsByTagName('input')[inputVal * serailNo].style.fontSize = "1.6rem";
            // document.getElementsByTagName('input')[17].style.background = "white";

        }, 300);
    }
}




function save() {
    alert("SAVED")
}
