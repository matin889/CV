const url = "cv.json";

async function getSomething() {
    let response = await fetch(url);

    if(response.ok) {
        let data = await response.json();
        const contentMain = document.querySelector('.content-main');
        const sidebarJson = data.sidebar[0];
        const sidebar = document.querySelector('.cv-image');
        const cvImage = document.createElement('img');
        cvImage.classList.add('myphoto');
        cvImage.src = `${sidebarJson.img}`
        sidebar.appendChild(cvImage);
        const profileName = document.createElement('h3');
        profileName.classList.add('name');
        profileName.innerHTML = `${sidebarJson.profilename}`;
        sidebar.appendChild(profileName);
        const profileText = document.createElement('p');
        profileText.classList.add('cv-text');
        profileText.innerHTML = `${sidebarJson.road} , ${sidebarJson.post} , ${sidebarJson.phone} , ${sidebarJson.email}`;
        sidebar.appendChild(profileText);
        const main = document.querySelector('.job-details');
        const name = document.createElement('h2');
        name.innerHTML = 'Arbetslivserfarenhet';
        main.appendChild(name);
        const education = document.querySelector('.education');
        const educationHeading = document.createElement('h2');
        educationHeading.classList.add('heading-edu');
        educationHeading.innerHTML = "Utbildning";
        education.appendChild(educationHeading);

        data.WorkExperience.forEach(work => {
            let jobStage = document.createElement('div');
            jobStage.classList.add('job');
            main.appendChild(jobStage);
            let duration = document.createElement('h4');
            duration.innerHTML = `${work.duration}`;
            jobStage.appendChild(duration);
            let position = document.createElement('h3');
            position.innerHTML = `${work.position}`;
            jobStage.appendChild(position);
            // let responsibility = document.createElement('li');
            // responsibility.innerHTML = `${work.responsibility}`;
            // main.appendChild(responsibility);
            let responsibilites = work.responsibility;
            // console.log(responsibilites);
            for (let i = 0; i < responsibilites.length; i++) {
                // console.log('i:', i);
                let li = document.createElement('li');
                li.innerHTML = responsibilites[i];
                jobStage.appendChild(li);
                
            }
            
        });

        data.educations.forEach(study => {
            let courseStart = document.createElement('div');
            courseStart.classList.add('start');
            courseStart.innerHTML = `<h3>Start</h3>`;
            education.appendChild(courseStart);
            let courseEnd = document.createElement('div');
            courseEnd.classList.add('end');
            courseEnd.innerHTML = `<h3>Slut</h3>`;
            education.appendChild(courseEnd);
            let schoolName = document.createElement('div');
            schoolName.classList.add('school');
            schoolName.innerHTML = `<h3>Skola</h3>`;
            education.appendChild(schoolName);
            let courseName = document.createElement('div');
            courseName.classList.add('course');
            courseName.innerHTML = `<h3>Kurs</h3>`;
            education.appendChild(courseName);
            console.log(study);
            
            let first = study.first;
            for (let j = 0; j < first.length; j++) {
                let text = document.createElement('p');
                text.innerHTML = first[j];
                education.appendChild(text); 
            }
            let second = study.second;
            for (let j = 0; j < second.length; j++) {
                let text = document.createElement('p');
                text.innerHTML = second[j];
                education.appendChild(text);  
            }
            let third = study.third;
            for (let j = 0; j < third.length; j++) {
                let text = document.createElement('p');
                text.innerHTML = third[j];
                education.appendChild(text);  
            }
            let fourth = study.fourth;
            for (let j = 0; j < fourth.length; j++) {
                let text = document.createElement('p');
                text.innerHTML = fourth[j];
                education.appendChild(text);  
            }
            let fifth = study.fifth;
            for (let j = 0; j < fifth.length; j++) {
                let text = document.createElement('p');
                text.innerHTML = fifth[j];
                education.appendChild(text);  
            }
            let sixth = study.sixth;
            for (let j = 0; j < sixth.length; j++) {
                let text = document.createElement('p');
                text.innerHTML = sixth[j];
                education.appendChild(text);  
            }
            let seventh = study.seventh;
            for (let j = 0; j < seventh.length; j++) {
                let text = document.createElement('p');
                text.innerHTML = seventh[j];
                education.appendChild(text);  
            }
            let eigth = study.eigth;
            for (let j = 0; j < eigth.length; j++) {
                let text = document.createElement('p');
                text.innerHTML = eigth[j];
                education.appendChild(text);  
            }
            let ninth = study.ninth;
            for (let j = 0; j < ninth.length; j++) {
                let text = document.createElement('p');
                text.innerHTML = ninth[j];
                education.appendChild(text);  
            }
            let tenth = study.tenth;
            for (let j = 0; j < tenth.length; j++) {
                let text = document.createElement('p');
                text.innerHTML = tenth[j];
                education.appendChild(text);  
            }
            let eleventh = study.eleventh;
            for (let j = 0; j < eleventh.length; j++) {
                let text = document.createElement('p');
                text.innerHTML = eleventh[j];
                education.appendChild(text);  
            }
            let twelfth = study.twelfth;
            for (let j = 0; j < twelfth.length; j++) {
                let text = document.createElement('p');
                text.innerHTML = twelfth[j];
                education.appendChild(text);  
            }
            let thirteenth = study.thirteenth;
            for (let j = 0; j < thirteenth.length; j++) {
                let text = document.createElement('p');
                text.innerHTML = thirteenth[j];
                education.appendChild(text);  
            }
        })

    }
    else {
        console.log("HTTP-Error" + response.status);
    }
}

getSomething();



const gallery = document.querySelector('.gallery-image');
const img = document.querySelectorAll('.gallery-image img');
const modal = document.querySelector(".modalOuter");
const modalImage = document.getElementById("popImage");
console.log(modalImage);
const close = document.querySelector(".close");


img.forEach(card => {
    card.onclick = function() {
        modal.style.display = 'block';
        modalImage.src = card.getAttribute('src');
        console.log('I was clicked');
    }
});

close.onclick = function() {
    modal.style.display = 'none';
}
modal.onclick = function() {
    modal.style.display = 'none';
}

