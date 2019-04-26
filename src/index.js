
document.getElementById("app").innerHTML = `
<h1>Binary to Decimal Converter</h1>
<form>
<label for="binary">Binary number</label>
<input type="text" id="binary" placeholder="Enter 0 or 1">
<button id="submit">SUBMIT</button>
<p>Decimal output: <span id="decimal"></span></p>
</form>
`;

const sendValue = e => {
    e.preventDefault();
    const val = binary.value;
    if(val.length >= 9){
        alert('User can enter up to 8 binary digits in one input field');
        return;
    }else if(val.match(/^[0-1]+$/g) === null){
        alert('User can enter only 0 or 1');
        return;
    } else {
        const reversedValue = val.split('').reverse().map(Number);
        const resultValue = reversedValue.reduce((accumulator, currentValue, idx)=>
        accumulator + currentValue * Math.pow(2,idx));
        document.getElementById('decimal').textContent = resultValue;
    }
    binary.value = "";
};

const binary = document.getElementById("binary");
const submit = document.getElementById("submit");
submit.addEventListener("click", sendValue);
