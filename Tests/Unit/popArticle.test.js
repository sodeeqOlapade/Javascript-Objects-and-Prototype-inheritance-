const { AdminDoctor } = require("../../main/adminDoctor");
const { staffDatabase, patientDatabase } = require("../../storage/dataBase");

const adminDoctor1 = new AdminDoctor("Abraham Joe", "Male");
const adminDoctor2 = new AdminDoctor("Augustus James", "Male");

const doctor1 = adminDoctor1.createNewDoctor("Mary Jones", "Female");
const doctor2 = adminDoctor2.createNewDoctor("Janet Jay", "Female");

const nurse1 = adminDoctor1.createNewNurse("Emily Rock", "Male");
const nurse2 = adminDoctor2.createNewNurse("Smith Dukes", "Male");

const patient_one = nurse1.admitNewPatient("Cindy", "Female", 12, "Cold", [
  "Turning Stomach",
  "Hurt"
]);

const patient_two = nurse2.admitNewPatient("John", "Male", 23, "Maleria", [
  "Headache",
  "cold"
]);

console.log(staffDatabase);
console.log(patientDatabase);

describe("POP Article Tests", () => {
  it("checks if adminDoctor, doctor and nurse instances are created", () => {
    expect(staffDatabase).toContainEqual({
      name: "Abraham Joe",
      gender: "Male",
      staffId: "MS-0000-0",
      role: "adminDoctor"
    });

    expect(staffDatabase).toContainEqual({
      name: "Mary Jones",
      gender: "Female",
      staffId: "MS-0000-2",
      role: "doctor"
    });

    expect(staffDatabase).toContainEqual({
      name: "Emily Rock",
      gender: "Male",
      staffId: "MS-0000-4",
      role: "nurse"
    });
  });

  it("checks if patient is created and save to database", () => {
    expect(patientDatabase[0]).toMatchObject({
      nurseId: "MS-0000-4",
      nurseName: "Emily Rock",
      name: "Cindy",
      gender: "Female",
      age: 12,
      symptoms: ["Turning Stomach", "Hurt"],
      ailment: "Cold",
      patientId: "PT-0000-0"
    });
  });

  it("ensures a medical staff can read a patient from database", () => {
    const result = doctor1.readOnePatient("PT-0000-0");
    expect(result).toMatchObject({
      nurseId: "MS-0000-4",
      nurseName: "Emily Rock",
      name: "Cindy",
      gender: "Female",
      age: 12,
      symptoms: ["Turning Stomach", "Hurt"],
      ailment: "Cold",
      patientId: "PT-0000-0"
    });
  });

  it("ensures a medical staff can read all patient from database", () => {
    const result = nurse2.readAllPatient();
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toMatchObject({
      nurseId: "MS-0000-4",
      nurseName: "Emily Rock",
      name: "Cindy",
      gender: "Female",
      age: 12,
      symptoms: ["Turning Stomach", "Hurt"],
      ailment: "Cold",
      patientId: "PT-0000-0"
    });
  });

  it("ensures a nurse can update patient record", () => {
    nurse1.updatePatientRecord("PT-0000-0", "Johnny", 43, "Maleria", [
      "Headache",
      "cold"
    ]);

    expect(patientDatabase[0]).toMatchObject({
      nurseId: "MS-0000-4",
      nurseName: "Emily Rock",
      name: "Johnny",
      gender: "Female",
      age: 43,
      symptoms: ["Headache", "cold"],
      ailment: "Maleria",
      patientId: "PT-0000-0",
      editedBy: "MS-0000-4"
    });
  });




  it("ensures a doctor can prescribe drugs to a patient", () => {
    const result = doctor2.prescribeDrugsToPatient("PT-0000-1");

    expect(result).toMatch(/Drugs/);
    expect(result).toMatch(/Medical Advice/);
    expect(result).toMatch(/Patient/);
  });

  it("ensures a doctor can refer a patient to specialist", () => {
    doctor1.referPatientToSpecialist("PT-0000-1");
    const result = doctor2.readAllPatient();
    expect(result[1]).toHaveProperty("referredToSpecialist", true);
  });

  it("ensures a doctor can discharge a patient to specialist", () => {
    doctor2.dischargePatient("PT-0000-0");
    const result = doctor2.readAllPatient();
    console.log(result);
    expect(result[0]).toHaveProperty("dischargeAuthorisedBy");
    expect(result[0]).toHaveProperty("dischargeAuthorisedBy");
    expect(result[0]).toHaveProperty("timeDischarged");
  });

  it('ensures an adminDoctor can read any medical staff details', () =>{
    const result = adminDoctor1.readOneMedicalStaff("MS-0000-4");
    expect(result).toEqual({
        name: 'Emily Rock',
        gender: 'Male',
        staffId: 'MS-0000-4',
        role: 'nurse' });
  });

  it('ensures an adminDoctor can read all medical staff details', () =>{
    const result = adminDoctor1.readAllMedicalStaff();
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toHaveProperty('name');
    expect(result[0]).toHaveProperty('staffId');
  });
});
