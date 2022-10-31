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
    },
    {
        "SL": "6",
        "Tag_No": "1363",
        "Marks": "<input type='number' onchange='saveMarksLS(this)' name='1363' step='0.01' min='0' max='10' class='form-control border border-dark' placeholder='Max 10' aria-describedby='basic-addon1' required>",
        "Name": "Suman Kalyan Das "
    },
    {
        "SL": "7",
        "Tag_No": "2009",
        "Marks": "<input type='number' onchange='saveMarksLS(this)' name='6357' step='0.01' min='0' max='10' class='form-control border border-dark' placeholder='Max 10' aria-describedby='basic-addon1' required>",
        "Name": "Amir Sohail"
    },
    {
        "SL": "8",
        "Tag_No": "4000",
        "Marks": "<input type='number' onchange='saveMarksLS(this)' name='7659' step='0.01' min='0' max='10' class='form-control border border-dark' placeholder='Max 10' aria-describedby='basic-addon1' required>",
        "Name": "Sk Hasibul "
    },
    {
        "SL": "9",
        "Tag_No": "4092",
        "Marks": "<input type='number' onchange='saveMarksLS(this)' name='7657' step='0.01' min='0' max='10' class='form-control border border-dark' placeholder='Max 10' aria-describedby='basic-addon1' required>",
        "Name": "Chandan Jana"
    },
    {
        "SL": "10",
        "Tag_No": "12356",
        "Marks": "<input type='number' onchange='saveMarksLS(this)' name='61' step='0.01' min='0' max='10' class='form-control border border-dark' placeholder='Max 10' aria-describedby='basic-addon1' required>",
        "Name": "KUNAL SAHA"
    },
    {
        "SL": "11",
        "Tag_No": "12429",
        "Marks": "<input type='number' onchange='saveMarksLS(this)' name='97' step='0.01' min='0' max='10' class='form-control border border-dark' placeholder='Max 10' aria-describedby='basic-addon1' required>",
        "Name": "SHIBAM DAS"
    },
    {
        "SL": "12",
        "Tag_No": "13245",
        "Marks": "<input type='number' onchange='saveMarksLS(this)' name='66' step='0.01' min='0' max='10' class='form-control border border-dark' placeholder='Max 10' aria-describedby='basic-addon1' required>",
        "Name": "PRASIT DAS"
    },
    {
        "SL": "13",
        "Tag_No": "13246",
        "Marks": "<input type='number' onchange='saveMarksLS(this)' name='62' step='0.01' min='0' max='10' class='form-control border border-dark' placeholder='Max 10' aria-describedby='basic-addon1' required>",
        "Name": "ARNAB BISWAS"
    },
    {
        "SL": "14",
        "Tag_No": "13249",
        "Marks": "<input type='number' onchange='saveMarksLS(this)' name='7398' step='0.01' min='0' max='10' class='form-control border border-dark' placeholder='Max 10' aria-describedby='basic-addon1' required>",
        "Name": "amir sohail"
    },
    {
        "SL": "15",
        "Tag_No": "13427",
        "Marks": "<input type='number' onchange='saveMarksLS(this)' name='59' step='0.01' min='0' max='10' class='form-control border border-dark' placeholder='Max 10' aria-describedby='basic-addon1' required>",
        "Name": "SUPRATIM NATH"
    },
    {
        "SL": "16",
        "Tag_No": "13467",
        "Marks": "<input type='number' onchange='saveMarksLS(this)' name='64' step='0.01' min='0' max='10' class='form-control border border-dark' placeholder='Max 10' aria-describedby='basic-addon1' required>",
        "Name": "PRAMIT DAS"
    }
]

function myFunction(){

 for(i of candidates){
    
    const candidateVal = document.createElement('div');
    candidateVal.classList.add("candidate")
    document.getElementById('main-div').appendChild(candidateVal)
    candidateVal.setAttribute("id",`idCandidate${i.SL}`);
    candidateVal.innerHTML = `<div class="candidate">
                            <h1>${i.SL}</h1>
                    
                            <div class="tag-bg-shape">
                                <p>${i.Tag_No}</p>
                            </div>
                            ${i.Marks}
                            
                            <button onclick = "btnClicked${i.SL}(6)">6</button>
                            <button onclick = "btnClicked${i.SL}(6.5)">6.5</button>
                            <button onclick = "btnClicked${i.SL}(7)">7</button>
                            <button onclick = "btnClicked${i.SL}(7.5)">7.5</button>
                            <button onclick = "btnClicked${i.SL}(8)">8</button>
                            <button onclick = "btnClicked${i.SL}(8.5)">8.5</button>
                            <button onclick = "btnClicked${i.SL}(9)">9</button>
                            <button onclick = "btnClicked${i.SL}(9.5)">9.5</button>
                            <button onclick = "btnClicked${i.SL}(10)">10</button>
                            <button onclick = "btnClicked${i.SL}(5.5)">5.5</button>
                            <button onclick = "btnClicked${i.SL}(5)">5</button>
                            <button onclick = "btnClicked${i.SL}(4.5)">4.5</button>
                            <button onclick = "btnClicked${i.SL}(4)">4</button>
                            <button onclick = "btnClicked${i.SL}(3.5)">3.5</button>
                            <button onclick = "btnClicked${i.SL}(3)">3</button>
                            <button onclick = "btnClicked${i.SL}(2.5)">2.5</button>
                            <button onclick = "btnClicked${i.SL}(2)">2</button>
                            <button onclick = "btnClicked${i.SL}(1.5)">1.5</button>
                            <button onclick = "btnClicked${i.SL}(1)">1</button>
                            <button onclick = "btnClicked${i.SL}(0)">0</button>
                        </div>  `
    
    }
}

// Connection with Button and Input Box
function btnClicked1(val){
    document.getElementsByTagName('input')[0].value = val;
}
function btnClicked2(val){
    document.getElementsByTagName('input')[1].value = val;
}
function btnClicked3(val){
    document.getElementsByTagName('input')[2].value = val;
}
function btnClicked4(val){
    document.getElementsByTagName('input')[3].value = val;
}
function btnClicked5(val){
    document.getElementsByTagName('input')[4].value = val;
}
function btnClicked6(val){
    document.getElementsByTagName('input')[5].value = val;
}
function btnClicked7(val){
    document.getElementsByTagName('input')[6].value = val;
}
function btnClicked8(val){
    document.getElementsByTagName('input')[7].value = val;
}
function btnClicked9(val){
    document.getElementsByTagName('input')[8].value = val;
}
function btnClicked10(val){
    document.getElementsByTagName('input')[9].value = val;
}
function btnClicked11(val){
    document.getElementsByTagName('input')[10].value = val;
}
function btnClicked12(val){
    document.getElementsByTagName('input')[11].value = val;
}
function btnClicked13(val){
    document.getElementsByTagName('input')[12].value = val;
}
function btnClicked14(val){
    document.getElementsByTagName('input')[13].value = val;
}
function btnClicked15(val){
    document.getElementsByTagName('input')[14].value = val;
}
function btnClicked16(val){
    document.getElementsByTagName('input')[15].value = val;
}
function btnClicked17(val){
    document.getElementsByTagName('input')[16].value = val;
}
function btnClicked18(val){
    document.getElementsByTagName('input')[17].value = val;
}
function btnClicked19(val){
    document.getElementsByTagName('input')[18].value = val;
}
function btnClicked20(val){
    document.getElementsByTagName('input')[19].value = val;
}
function btnClicked21(val){
    document.getElementsByTagName('input')[20].value = val;
}
function btnClicked22(val){
    document.getElementsByTagName('input')[21].value = val;
}
function btnClicked23(val){
    document.getElementsByTagName('input')[22].value = val;
}
function btnClicked24(val){
    document.getElementsByTagName('input')[23].value = val;
}
function btnClicked25(val){
    document.getElementsByTagName('input')[24].value = val;
}
function btnClicked26(val){
    document.getElementsByTagName('input')[25].value = val;
}
function btnClicked27(val){
    document.getElementsByTagName('input')[26].value = val;
}




    // // Candidate Div
    // const candidateVal = document.createElement('div')
    // candidateVal.classList.add("candidate")
    // document.getElementById('main-div').appendChild(candidateVal)
    // candidateVal.setAttribute("id",`idCandidate${i.SL}`);
    
    // // h1 
    // const h1 = document.createElement('h1');
    // document.getElementById(`idCandidate${i.SL}`).appendChild(h1)
    // h1.innerHTML = i.SL

    // //  Tag No. Background Shape Div 

    // const backGroundDiv = document.createElement('div');
    // backGroundDiv.classList.add("tag-bg-shape");
    // document.getElementById(`idCandidate${i.SL}`).appendChild(backGroundDiv);
    // backGroundDiv.setAttribute("id",`idbackGroundDiv${i.SL}`);

    // // Tag No .
    // const p = document.createElement('p');
    // document.getElementById(`idbackGroundDiv${i.SL}`).appendChild(p)
    // p.innerHTML = i.Tag_No

    // //Marks Input Box
    // const marksInput = document.createElement('input');
    // document.getElementById(`idCandidate${i.SL}`).appendChild(marksInput);
    // marksInput.setAttribute("type","number");
    // marksInput.setAttribute("placeholder","Marks");

    // // Buttons -----------------

    // const button6 = document.createElement('button');
    // document.getElementById(`idCandidate${i.SL}`).appendChild(button6);
    // button6.innerHTML = "6"

    // const button6_5 = document.createElement('button');
    // document.getElementById(`idCandidate${i.SL}`).appendChild(button6_5);
    // button6_5.innerHTML = "6.5"

    // const button7 = document.createElement('button');
    // document.getElementById(`idCandidate${i.SL}`).appendChild(button7);
    // button7.innerHTML = "7"

    // const button7_5 = document.createElement('button');
    // document.getElementById(`idCandidate${i.SL}`).appendChild(button7_5);
    // button7_5.innerHTML = "7.5"

    // const button8 = document.createElement('button');
    // document.getElementById(`idCandidate${i.SL}`).appendChild(button8);
    // button8.innerHTML = "8"

    // const button8_5 = document.createElement('button');
    // document.getElementById(`idCandidate${i.SL}`).appendChild(button8_5);
    // button8_5.innerHTML = "8.5"

    // const button9 = document.createElement('button');
    // document.getElementById(`idCandidate${i.SL}`).appendChild(button9);
    // button9.innerHTML = "9"

    // const button9_5 = document.createElement('button');
    // document.getElementById(`idCandidate${i.SL}`).appendChild(button9_5);
    // button9_5.innerHTML = "9.5"

    // const button10 = document.createElement('button');
    // document.getElementById(`idCandidate${i.SL}`).appendChild(button10);
    // button10.innerHTML = "10"

    // const button5_5 = document.createElement('button');
    // document.getElementById(`idCandidate${i.SL}`).appendChild(button5_5);
    // button5_5.innerHTML = "5.5"

    // const button5 = document.createElement('button');
    // document.getElementById(`idCandidate${i.SL}`).appendChild(button5);
    // button5.innerHTML = "5"

    // const button4_5 = document.createElement('button');
    // document.getElementById(`idCandidate${i.SL}`).appendChild(button4_5);
    // button4_5.innerHTML = "4.5"

    // const button4 = document.createElement('button');
    // document.getElementById(`idCandidate${i.SL}`).appendChild(button4);
    // button4.innerHTML = "4"

    // const button3_5 = document.createElement('button');
    // document.getElementById(`idCandidate${i.SL}`).appendChild(button3_5);
    // button3_5.innerHTML = "3.5"

    // const button3 = document.createElement('button');
    // document.getElementById(`idCandidate${i.SL}`).appendChild(button3);
    // button3.innerHTML = "3"

    // const button2_5 = document.createElement('button');
    // document.getElementById(`idCandidate${i.SL}`).appendChild(button2_5);
    // button2_5.innerHTML = "2.5"

    // const button2 = document.createElement('button');
    // document.getElementById(`idCandidate${i.SL}`).appendChild(button2);
    // button2.innerHTML = "2"

    // const button1_5 = document.createElement('button');
    // document.getElementById(`idCandidate${i.SL}`).appendChild(button1_5);
    // button1_5.innerHTML = "1.5"

    // const button1 = document.createElement('button');
    // document.getElementById(`idCandidate${i.SL}`).appendChild(button1);
    // button1.innerHTML = "1"

    // const button0 = document.createElement('button');
    // document.getElementById(`idCandidate${i.SL}`).appendChild(button0);
    // button0.innerHTML = "0"
