// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 
const errorMsgsLogger = {
    logMsg: function() {
        if(this.errMsg) {
            console.log(`error message: ${this.errMsg}`);
        }
    }
}

const error1 = {
    errMsg : "This is an error 1"
}

const error2 = {
    errMsg : "This is an error 2"
}

errorMsgsLogger.logMsg.call(error1);
errorMsgsLogger.logMsg.call(error2);