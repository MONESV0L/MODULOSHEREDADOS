var Tutor=require('./modulo1');
exports.modulo2=function()
{
console.log("Contenido modulo 2")
this.pTutor = function ()
{
var PTutor=Tutor
PTutor.modulo1();
}
}