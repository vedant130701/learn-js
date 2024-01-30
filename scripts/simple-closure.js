function makeFunc() {
    const name = 'Mozilla';
    function dispName() {
        console.log(name);
    }
    return dispName;
    // body of function dispName is returned, along with surrounding scope in which name = 'Mozilla'
}

const f = makeFunc();
f();