let staffDatabase = [];
let patientDatabase = [];

const ailmentAndDrugs = [
  {
    name: "Maleria",
    drugs: ["paracetamol", "Panadol"],
    medicalAdvice: "Patient should take some rest"
  },
  {
    name: "Cold",
    drugs: ["paracetamol", "aspirin", "Hot Liquid"],
    medicalAdvice: "Patient should consume less iced products"
  },
  {
    name: "Fever",
    drugs: ["ibuprofen", "aspirin"],
    medicalAdvice: "Patient should call doctor if ailment persist"
  }
];

module.exports = { staffDatabase, patientDatabase, ailmentAndDrugs };
