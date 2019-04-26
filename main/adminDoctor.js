const { staffDatabase } = require("../storage/dataBase");
const { Doctor } = require("../main/doctor");
const { Nurse } = require("../main/nurse");

function AdminDoctor(name, gender) {
  Doctor.call(this, name, gender);
  this.role = "adminDoctor";

}

AdminDoctor.prototype = Object.create(Doctor.prototype);
AdminDoctor.prototype.constructor = AdminDoctor;

AdminDoctor.prototype.createNewDoctor = function(name, gender) {
  return new Doctor(name, gender);
};

AdminDoctor.prototype.createNewNurse = function(name, gender) {
  return new Nurse(name, gender);
};

AdminDoctor.prototype.readAllMedicalStaff = function() {
  return staffDatabase;
};

AdminDoctor.prototype.readOneMedicalStaff = function(staffId) {
  return staffDatabase.find(staff => staff.staffId === staffId);
};


module.exports = { AdminDoctor };
