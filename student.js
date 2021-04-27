//-----------------------------------Ejercicio 4-arreglos
function eraseCNumber(nctrl,students){
    students = students.filter(function( st ) {
        return st.controlNumber !== nctrl;
    });
    return students;
}

function readCNumber(nctrl,students){
    students = students.filter(function( st ) {
        return st.controlNumber == nctrl;
    });
    students.forEach(s => {
        console.log("Nombre: "+s.name);
        console.log("Número de control: "+s.controlNumber);
        console.log("Email: "+s.email);
        console.log("Calificación: "+s.grade);
    });   
}

function updateCNumber(valor,campo,nctrl,students){
    let pos = students.findIndex(s=>s.controlNumber == nctrl);
    if(campo=="name"){
        students[pos].name=valor;
    }else if(campo=="controlNumber"){
        students[pos].controlNumber=valor;
    }else if(campo=="email"){
        students[pos].email = valor;
    }else if(campo == "grade"){
        students[pos].grade=valor;
    }
    return students;
}

function califAprob(students){
    students = students.filter(function( st ) {
        return st.grade > 70;
    });
    return students;
}

module.exports.eraseCNumber = eraseCNumber;
module.exports.readCNumber = readCNumber;
module.exports.califAprob = califAprob;
module.exports.updateCNumber = updateCNumber;
//***************************************************************************

function create(student, students){
    students.push(student);
    return students;
}

function read(students){
    students.forEach(s => {
        console.log("Nombre: "+s.name);
        console.log("Número de control: "+s.controlNumber);
    });
}

function erase(pos,students){
    students.splice(pos,1);
    return students;
}

function update(pos,newelement,students){
    students[pos]=newelement;
    return students;
}

module.exports.create = create;
module.exports.read = read;
module.exports.erase = erase;
module.exports.update = update;

