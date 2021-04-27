let model = require('./student');
var students = [];
let student = {
    name: 'Paulina Alejandra Nova Ramírez',
    controlNumber: '17401031',
    email: 'paalnovara@ittepic.edu.mx',
    grade: 100
}

let student2 = {
    name: 'Elvia Araceli Nova Ramírez',
    controlNumber: '17401032',
    email: 'elarnovara@ittepic.edu.mx',
    grade: 90
}


students = model.create(student,students);
students = model.create(student2,students);
console.log('--Después de insertar--');
model.read(students);
students = model.erase(0,students);
console.log('--Después de borrar--');
model.read(students);

let student3 = {
    name: 'Paulina Alejandra Nova Ramírez',
    controlNumber: '17401033',
    email: 'paalnovara@ittepic.edu.mx',
    grade: 100
}

let student4 = {
    name: 'Rosamaría Nova Ramírez',
    controlNumber: '17401034',
    email: 'ronovara@ittepic.edu.mx',
    grade: 70
}

students = model.create(student3,students);
students = model.create(student4,students);
students = model.update(1,{name:'Pauina Nova',controlNumber:'17401033',email:'nuevo@ittepic.edu.mx',grade:80},students);
console.log('--Después de actualizar--');
model.read(students);

//------------------------------------Ejercicio 4-arreglos
students = model.updateCNumber("rosamaria_nova@hotmail.com","email","17401034",students);
console.log('--Después de actualizar un solo campo--');
model.readCNumber("17401034",students);
students = model.eraseCNumber("17401033",students);
console.log('--Después de eliminar por nctrl--');
model.read(students);
console.log('--Consultar por nctrl--');
model.readCNumber("17401032",students);
students = model.califAprob(students);
console.log('--Listar estudiantes aprobados--');
model.read(students);
