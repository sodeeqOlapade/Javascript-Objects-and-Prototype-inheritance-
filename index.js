const {
  AdminDoctor
} = require("../Javascript-Objects-and-Prototype-inheritance-/main/adminDoctor");

const {
  Nurse
} = require("../Javascript-Objects-and-Prototype-inheritance-/main/nurse");

const Ben = new AdminDoctor("Ben Solomon", "Male");
const Patricia = new AdminDoctor("Patricia leon", "Female");

const doctor_Elly = Ben.createNewDoctor("Elly Smith", "Female");
const doctor_Jane = Patricia.createNewDoctor("Jane Elliot", "Female");

const nurse_mary = Patricia.createNewNurse("Mary Moore", "Female");
const nurse_Mike = Ben.createNewNurse("Mike Gregor", "Male");

const patient_one = nurse_Mike.admitNewPatient("Cindy", "Female", 12, "Cold", [
  "Turning Stomach",
  "Hurt"
]);

const patient_two = nurse_Mike.admitNewPatient("John", "Male", 23, "Maleria", [
  "Headache",
  "cold"
]);

console.log("Doctor read one patient", doctor_Jane.readOnePatient("PT-0000-0"));
console.log("Nurse read all patient", nurse_mary.readAllPatient());

nurse_mary.updatePatientRecord("PT-0000-0", "Johnny", 43, "Maleria", [
  "Headache",
  "cold"
]);

console.log(doctor_Elly.prescribeDrugsToPatient("PT-0000-1"));
doctor_Jane.referPatientToSpecialist("PT-0000-1");
doctor_Jane.dischargePatient("PT-0000-1");

console.log(
  "Admin Doctor read one Medical Staff",
  Ben.readOneMedicalStaff("MS-0000-4")
);
console.log(
  "Admin Doctor read All Medical Staff",
  Patricia.readAllMedicalStaff()
);

