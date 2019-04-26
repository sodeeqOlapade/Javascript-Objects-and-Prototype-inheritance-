const { MedicalStaff } = require("../main/medicalStaff");
const { staffDatabase } = require("../storage/dataBase");
const { Patient } = require("../main/patient");

function Nurse(name, gender) {
  MedicalStaff.call(this, name, gender);
  this.role = "nurse";

  //   staffDatabase.push(this);
  console.log(`Nurse successfully created`);
  console.log(this);
}

Nurse.prototype = Object.create(MedicalStaff.prototype);
Nurse.prototype.constructor = Nurse;

Nurse.prototype.admitNewPatient = function(
  name,
  gender,
  age,
  ailment,
  symptoms
) {
  new Patient(this.staffId, this.name, name, gender, age, ailment, symptoms);
};

Nurse.prototype.updatePatientRecord = function(
  patientID,
  name,
  age,
  ailment,
  symptoms
) {
  Patient.prototype.updatePatient(
    this.staffId,
    patientID,
    name,
    age,
    ailment,
    symptoms
  );
};



module.exports = { Nurse };
