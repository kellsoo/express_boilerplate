const border = "------------------------------------------------------------------------";
const borderWithEnter = "------------------------------------------------------------------------\n";

module.exports = {
    errorSimpleMethod: (msg, err) => {
        const returnObject = {};
        returnObject.msg = msg;
        returnObject.err = err;
        return returnObject;
    },

    errorMethod: (msg, step, err) => {
        const returnObject = {};
        returnObject.msg = msg;
        returnObject.step = step;
        returnObject.err = err;
        return returnObject;
    },

    successFirstMethod: (msg) => {
        let returnObject = "";
        returnObject += borderWithEnter;
        returnObject += msg;
        returnObject += "\n";
        returnObject += border;
        return returnObject;
    },

    successMethod: (msg) => {
        let returnObject = "";
        returnObject += msg;
        returnObject += "\n";
        returnObject += border;
        return returnObject;
    },

    successFirstMethodArray: (msg) => {
        const retArray = [];
        retArray.push(border);
        retArray.push(msg);
        retArray.push(border);
        return retArray;
    },

    successMethodArray: (msg) => {
        const retArray = [];
        retArray.push(msg);
        retArray.push(border);
        return retArray;
    }
};
