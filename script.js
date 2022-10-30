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
                            <button>6</button>
                            <button>6.5</button>
                            <button>7</button>
                            <button>7.5</button>
                            <button>8</button>
                            <button>8.5</button>
                            <button>9</button>
                            <button>9.5</button>
                            <button>10</button>
                            <button>5.5</button>
                            <button>5</button>
                            <button>4.5</button>
                            <button>4</button>
                            <button>3.5</button>
                            <button>3</button>
                            <button>2.5</button>
                            <button>2</button>
                            <button>1.5</button>
                            <button>1</button>
                            <button>0</button>
                        </div>  `
    
     }

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
