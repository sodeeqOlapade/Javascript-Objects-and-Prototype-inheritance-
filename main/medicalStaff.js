let { staffDatabase, patientDatabase } = require("../storage/dataBase");
const { Patient } = require("../main/patient");

let counter = 0;

function MedicalStaff(name, gender) {
  this.name = name;
  this.gender = gender;
  this.staffId = `MS-0000-${counter++}`;

  staffDatabase.push(this);
}

MedicalStaff.prototype.readOnePatient = function(patientId) {
  return Patient.prototype.readOnePatient(patientId);
};

MedicalStaff.prototype.readAllPatient = function() {
  return Patient.prototype.readAllPatient();
};


module.exports = { MedicalStaff };
