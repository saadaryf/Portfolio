
const popupDiv = document.querySelector('.popup-info');
const blurDiv = document.querySelector('.blur-screen');

const internshoipBtn = document.getElementById('internship');
const universityBtn = document.getElementById('university');
const collegeBtn = document.getElementById('college');
const schoolBtn = document.getElementById('school');

blurDiv.addEventListener('click', function () {
    popupDiv.style.display = 'none';
    blurDiv.style.display = 'none';
    isHidden = true;
})

let isHidden = true;
internshoipBtn.addEventListener('click', function () {
    if (isHidden) {
        popupDiv.innerHTML = `
        <b>Punjab Information Technology Board(PITB)</b>
        <p>Intern</p>
        <p>Spring Boot Java</p>
        <p>August 2023 - September 2023</p><br>
        <b>Skills Learned</b>
        <p>Web Based Applications Development, Spring Boot Java</p><br><br>
        `;
        popupDiv.style.display = 'block';
        blurDiv.style.display = 'block'
        isHidden = false;
    } else {
        popupDiv.style.display = 'none';
    }
})
universityBtn.addEventListener('click', function () {
    if (isHidden) {
        popupDiv.innerHTML = `
        <b>University of Central Punjab(UCP)-Lahore</b>
        <p>Student</p>
        <p>BS Software Engineering</p>
        <p>Octuber 2020 - Octuber 2024</p><br>
        <b>Skills Learned</b>
        <p>Coding, Web-Development, Presentations, Team-Working</p><br><br>
        `;
        popupDiv.style.display = 'block';
        blurDiv.style.display = 'block'
        isHidden = false;
    } else {
        popupDiv.style.display = 'none';
    }
})
collegeBtn.addEventListener('click', function () {
    if (isHidden) {
        popupDiv.innerHTML = `
        <b>Punjab College of Sciences-Gujranwala</b>
        <p>Student</p>
        <p>F.Sc pre-Engineering</p>
        <p>April 2018 - April 2019</p><br>
        <b>Skills Learned</b>
        <p>Advance Maths, Problem Solving, Time-Management</p><br><br>
        `;
        popupDiv.style.display = 'block';
        blurDiv.style.display = 'block'
        isHidden = false;
    } else {
        popupDiv.style.display = 'none';
    }
})
schoolBtn.addEventListener('click', function () {
    if (isHidden) {
        popupDiv.innerHTML = `
        <b>Jadeed Dastgir Ideal High School-GRW (PCC)</b>
        <p>Student</p>
        <p>Matriculation</p>
        <p>March 2016 - March 2018</p><br>
        <b>Skills Gained</b>
        <p>Learning, Social, Sports</p><br><br>
        `;
        popupDiv.style.display = 'block';
        blurDiv.style.display = 'block'
        isHidden = false;
    } else {
        popupDiv.style.display = 'none';
    }
})

