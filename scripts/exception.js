window.onload = function() {
    const btn = document.getElementById('btn')
    btn.onclick = () => {
        const message = document.getElementById("p01");
        message.textContent = "";
        let x = document.getElementById("demo").value;
        try {
            if(x == "") throw 'empty';
            if(isNaN(x)) throw 'not a number';
            x = Number(x);
            if(x < 5) throw 'too low';
            if(x > 10) throw 'too high';
        }
        catch(err) {
            if(err instanceof ReferenceError) {
                message.textContent = err.message;
            }
            else {
                message.textContent = "Input " + err;
            }
        }
        finally {
            document.getElementById("demo").value = '';
        }
    }
}