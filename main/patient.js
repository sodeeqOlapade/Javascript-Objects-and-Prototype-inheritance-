let { patientDatabase } = require("../storage/dataBase");

counter = 0;

function Patient(nurseId, nurseName, name, gender, age, ailment, symptoms) {
  this.nurseId = nurseId;
  this.nurseName = nurseName;
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.date = new Date().toLocaleDateString();
  this.time = new Date().toLocaleTimeString();
  this.symptoms = symptoms;
  this.ailment = ailment;
  this.patientId = `PT-0000-${counter++}`;

  patientDatabase.push(this);
  console.log(`Patient created successfully`);
  console.log(this);
}

Patient.prototype.updatePatient = function(
  nurseId,
  patientId,
  name,
  age,
  ailment,
  symptoms
) {
  let patient = patientDatabase.find(
    patient => patient.patientId === patientId
  );
  patient.name = name;
  patient.age = age;
  patient.ailment = ailment;
  patient.symptoms = symptoms;
  patient.editedBy = nurseId;
  console.log(`Patient ${patientId} details updated`);
  console.log(patient);
};

Patient.prototype.readOnePatient = function(patientId) {
  return patientDatabase.find(patient => patient.patientId === patientId);
};

Patient.prototype.readAllPatient = function() {
  return patientDatabase;
};

Patient.prototype.discharge = function(doctorName, patientId) {
  let patient = patientDatabase.find(patient => patientId === patientId);
  patient.isDisharged = true;
  patient.dischargeAuthorisedBy = doctorName;
  patient.dateDischarged = new Date().toLocaleDateString();
  patient.timeDischarged = new Date().toLocaleTimeString();
  console.log(`Patient ${patientId} discharged`);
};

Patient.prototype.refer = function(patientId) {
  let patient = patientDatabase.find(
    patient => patient.patientId === patientId
  );
  patient.referredToSpecialist = true;
  patient.dateReferred = new Date().toLocaleDateString();
  patient.timeReferred = new Date().toLocaleTimeString();
  console.log(`Patient ${patientId} referred to specialist`);
};
module.exports = { Patient };
