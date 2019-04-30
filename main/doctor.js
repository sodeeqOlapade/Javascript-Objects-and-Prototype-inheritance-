const { MedicalStaff } = require("../main/medicalStaff");
const { Patient } = require("../main/patient");
const { patientDatabase, ailmentAndDrugs } = require("../storage/dataBase");
const { Nurse } = require("../main/nurse");

function Doctor(name, gender) {
  MedicalStaff.call(this, name, gender);
  this.role = "doctor";

  console.log(`Doctor successfully created`);
  console.log(this);
}

Doctor.prototype = Object.create(MedicalStaff.prototype);
Doctor.prototype.constructor = Doctor;

Doctor.prototype.dischargePatient = function(patientId) {
  Patient.prototype.discharge(this.name, patientId);
};

Doctor.prototype.prescribeDrugsToPatient = function(patientId) {
  let patientAilment = patientDatabase.find(
    patient => patient.patientId === patientId
  ).ailment;

  let prescribedDrugs = ailmentAndDrugs.find(
    ailment => ailment.name === patientAilment
  ).drugs;

  let medicalAdvice = ailmentAndDrugs.find(
    ailment => ailment.name === patientAilment
  ).medicalAdvice;

  return `Drugs: Patient should be given ${prescribedDrugs} \n Medical Advice: ${medicalAdvice}`;
};

Doctor.prototype.referPatientToSpecialist = function(patientId) {
  Patient.prototype.refer(patientId);
};


module.exports = { Doctor };
