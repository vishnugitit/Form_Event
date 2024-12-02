const form = document.getElementById("form");
const idCardContainer = document.getElementById("id-card-container");

const collegeName = document.getElementById("college-name");
const studentPhoto = document.getElementById("student-photo");
const studentName = document.getElementById("student-name");
const studentBranch = document.getElementById("student-branch");
const studentRoll = document.getElementById("student-roll");
const studentValidity = document.getElementById("student-validity");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const college = document.getElementById("college").value;
  const name = document.getElementById("name").value;
  const branch = document.getElementById("branch").value;
  const roll = document.getElementById("roll").value;
  const validity = document.getElementById("validity").value;
  const photo = document.getElementById("photo").files[0];

  // Set ID card details
  collegeName.textContent = college;
  studentName.textContent = name;
  studentBranch.textContent = branch;
  studentRoll.textContent = roll;
  studentValidity.textContent = validity;

  // Read and set photo
  const reader = new FileReader();
  reader.onload = () => {
    studentPhoto.src = reader.result;
  };
  reader.readAsDataURL(photo);

  // Display ID card
  idCardContainer.style.display = "block";
});

function downloadIDCard() {
  const element = document.getElementById("id-card");
  html2canvas(element).then((canvas) => {
    const link = document.createElement("a");
    link.download = "ID_Card.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}
