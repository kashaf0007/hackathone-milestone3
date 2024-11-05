interface ResumeData {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  degree: string;
  institute: string;
  gradDate: Date;
  educationDesc: string;
  jobTitle: string;
  lastJob: string;
  company: string;
  workDates: string;
  jobDesc: string;
  skills: string;
}

const generateBtn = document.getElementById('generate-btn') as HTMLButtonElement;
const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
const generatedContent = document.getElementById('generated-content') as HTMLDivElement;

generateBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const resumeData: ResumeData = {
    name: (document.getElementById('name') as HTMLInputElement).value,
    lastname: (document.getElementById('last name') as HTMLInputElement).value,
    email: (document.getElementById('email') as HTMLInputElement).value,
    phone: (document.getElementById('phone no') as HTMLInputElement).value,
    country: (document.getElementById('country') as HTMLInputElement).value,
    city: (document.getElementById('city') as HTMLInputElement).value,
    degree: (document.getElementById('degree') as HTMLInputElement).value,
    institute: (document.getElementById('institute') as HTMLInputElement).value,
    gradDate: new Date((document.getElementById('grad-date') as HTMLInputElement).value),
    educationDesc: (document.getElementById('Education') as HTMLTextAreaElement).value,
    jobTitle: (document.getElementById('job-title') as HTMLInputElement).value,
    lastJob: (document.getElementById('last-job') as HTMLInputElement).value,
    company: (document.getElementById('company') as HTMLInputElement).value,
    workDates: (document.getElementById('work-dates') as HTMLInputElement).value,
    jobDesc: (document.getElementById('job-description') as HTMLTextAreaElement).value,
    skills: (document.getElementById('Skills') as HTMLTextAreaElement).value,
  };

  const resume = `
    <h1>${resumeData.name} ${resumeData.lastname}</h1>
    <p>${resumeData.email} | ${resumeData.phone}</p>
    <p>${resumeData.country}, ${resumeData.city}</p>

    <h2>Education</h2>
    <p>${resumeData.degree}, ${resumeData.institute}</p>
    <p>Graduation Date: ${resumeData.gradDate.toLocaleDateString()}</p>
    <p>${resumeData.educationDesc}</p>

    <h2>Work Experience</h2>
    <p>${resumeData.jobTitle}, ${resumeData.company}</p>
    <p>${resumeData.workDates}</p>
    <p>${resumeData.jobDesc}</p>

    <h2>Skills</h2>
    <p>${resumeData.skills}</p>
  `;

  generatedContent.innerHTML = resume;
});




