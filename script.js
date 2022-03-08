console.log("<======THIS IS YOUR FUTURE JOB DETECTOR=====>");

// creating random message array
const jobMonths = [1, 2, 3, 4, 5];
const jobCompany = ["Method Financial", "Evidence", "Lugg", "Informed K2"];
const jobRole = [
  "Full Stack Engineer",
  "Front-end Engineer",
  "Back-end Engineer",
  "Data Analyst",
];
const jobSalary = [100, 105, 70, 150, 70];

// final output message
let finalMessage = "";

// creating random messages
const randJobMonths = (jobMonths) => {
  let num = Math.floor(Math.random() * jobMonths.length);
  finalMessage =
    finalMessage +
    `Hi! Aman you will get a job after ${jobCompany[num]} month `;
};
const randJobCompany = (jobCompany) => {
  let num = Math.floor(Math.random() * jobCompany.length);
  finalMessage = finalMessage + `at ${jobCompany[num]} company `;
};
const randJobRole = (jobRole) => {
  let num = Math.floor(Math.random() * jobRole.length);
  finalMessage = finalMessage + `as a ${jobRole[num]} `;
};
const randJobSalary = (jobSalary) => {
  let num = Math.floor(Math.random() * jobSalary.length);
  finalMessage = finalMessage + `at ${jobSalary[num]}k/year.`;
};
