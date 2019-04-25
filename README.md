# JavaScript Objects and Prototype based inheritance explained with practical examples.

> ### **Introduction**

This is a simple project to demonstrate various ways of creating objects, what objects are capable of in JavaScript and most importantly to demonstrate how Objects in JavaScript inherit properties and methods from one another i.e Prototype based inheritance.

> ### **Features**
>

To drive home the concept of Prototype Oriented Programming in Javascript, we shall simulate the hierarchical structure of employees in a hospital, how they relate, what they have in common and responsibilities and task specific to each of them shall be used to explain concepts of Prototype Oriented Programming in JavaScript.

1 Nurses

- Admit New Patient
- Update Records of Patient

2 Doctors

- Prescribe Drugs
- Refer Patient to specialist
- Discharge Patients


2 Admin Doctors

- Create a Nurse Account
- Create a Doctor Account
- Read a medicalStaff
- Read all Staff

All the above listed cadres inherit from a base class or parent called Medical Staff. Medical Staff has the following attributes:

Medical Staff

- Staff Name
- Staff ID
- Role
- Read a Patient
- Read all Patients
