let form = document.getElementById("form");
let college = document.getElementById("college");
let fname = document.getElementById("fname");
let branch = document.getElementById("branch");
let rollnumber = document.getElementById("rollnumber");
let validity = document.getElementById("validity");
let folder = document.getElementById("folder");
let pic = document.getElementById("pic");

// form submission
let result = document.getElementsByTagName("p");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  result[0].innerHTML = "Thanks For Your Response";

  //   form layout
  let layout = document.createElement("div");
  layout.style.border = "2px solid black";
  layout.style.borderRadius = "20px";
  layout.style.height = "370px";
  layout.style.width = "240px";
  layout.style.margin = "40px";

  layout.style.margin = "3px";
  layout.style.marginLeft = "50px";
  document.body.appendChild(layout);

  // college name
  let institute = document.createElement("h2");

  institute.innerHTML = `<a style="font-family: georgia">${college.value}</a>`;
  institute.style.margin = "3px";
  institute.style.color = "red";

  institute.style.fontFamily = "calibri";

  institute.style.fontWeight = "200";
  institute.style.textAlign = "center";
  layout.appendChild(institute);

  //  photo
  const reader = new FileReader();
  reader.readAsDataURL(folder.files[0]);
  reader.addEventListener("load", (e) => {
    pic.setAttribute("src", e.target.result);
    pic.setAttribute("height", 120);
    pic.setAttribute("width", 100);
    pic.style.border = "2px solid black";
    pic.style.marginLeft = " 70px";
    pic.style.borderRadius = "10px";
    layout.appendChild(pic);
  });
  //   displaying after photo
  reader.addEventListener("loadend", () => {
    // Name
    let profile = document.createElement("h2");
    profile.innerHTML = `Name: <a style="font-family: georgia">${fname.value}</a>`;
    profile.style.margin = "10px";
    profile.style.fontFamily = "calibri";
    profile.style.fontWeight = "200";
    profile.style.textAlign = "center";
    //   profile.style.color="red"
    layout.appendChild(profile);

    //   course
    let course = document.createElement("h2");
    course.innerHTML = `Branch: <a style="font-family: georgia">${branch.value}</a>`;
    course.style.margin = "10px";
    course.style.fontFamily = "calibri";
    course.style.fontWeight = "200";
    course.style.textAlign = "center";
    layout.appendChild(course);

    // rollnumber
    let user_id = document.createElement("h2");
    user_id.innerHTML = `Roll Number: <a style="font-family: georgia">${rollnumber.value}</a>`;
    user_id.style.margin = "10px";
    user_id.style.fontFamily = "calibri";
    user_id.style.fontWeight = "200";
    user_id.style.textAlign = "center";
    layout.appendChild(user_id);

    // validity
    let graduation = document.createElement("h2");
    graduation.innerHTML = `Validity: <a style="font-family: georgia">${validity.value}</a>`;
    graduation.style.margin = "10px";
    graduation.style.fontFamily = "calibri";
    graduation.style.fontWeight = "200";
    graduation.style.textAlign = "center";
    layout.appendChild(graduation);
  });
});