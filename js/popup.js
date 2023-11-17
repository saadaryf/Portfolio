
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
            <p>Intern</p>
            <b>Punjab Information Technology Board(PITB)</b>
            <p>Spring Boot Java</p>
            <p>August 2023 - September 2023</p>
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
        <p>Student</p>
        <b>University of Central Punjab(UCP)-Lahore</b>
        <p>BS Software Engineering</p>
        <p>Octuber 2020 - Octuber 2024</p>
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
        <p>Student</p>
        <b>Punjab College of Sciences-Gujranwala</b>
        <p>F.Sc pre-Engineering</p>
        <p>April 2018 - April 2019</p>
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
        <p>Student</p>
        <b>Jadeed Dastgir Ideal High School-GRW (PCC)</b>
        <p>Matriculation</p>
        <p>March 2016 - March 2018</p>
        `;
        popupDiv.style.display = 'block';
        blurDiv.style.display = 'block'
        isHidden = false;
    } else {
        popupDiv.style.display = 'none';
    }
})

