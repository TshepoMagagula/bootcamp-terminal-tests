module.exports = function regCheck(regNo, regCode){
    return regNo.endsWith(regCode);
}