const url = "cv.json";

async function getSomething() {
    let response = await fetch(url);

    if(response.ok) {
        let data = await response.json();
        return data;
    } else {
        console.log("HTTP-Error" + response.status);
        return response.status;
    }
}

getSomething().then(data => {
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
    let tableBody = document.querySelector('.divTableBody');

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
        let responsibilites = work.responsibility;
        for (let i = 0; i < responsibilites.length; i++) {
            let li = document.createElement('li');
            li.innerHTML = responsibilites[i];
            jobStage.appendChild(li); 
        }
    });

    data.educations.forEach(study => {
        let tableRow = document.createElement('div');
        tableRow.classList.add('divTableRowInfo');
        tableBody.appendChild(tableRow);
        
        let startDateText = document.createElement('div');
        startDateText.classList.add('divTableCellStart');
        startDateText.innerHTML = `${study.startDate}`
        tableRow.appendChild(startDateText);

        let endDateText = document.createElement('div');
        endDateText.classList.add('divTableCellEnd');
        endDateText.innerHTML = `${study.endDate}`
        tableRow.appendChild(endDateText);

        let schoolNameText = document.createElement('div');
        schoolNameText.classList.add('divTableCellSchool');
        schoolNameText.innerHTML = `${study.school}`
        tableRow.appendChild(schoolNameText);

        let courseNameText = document.createElement('div');
        courseNameText.classList.add('divTableCellcourse');
        courseNameText.innerHTML = `${study.course}`
        tableRow.appendChild(courseNameText);
        
    })
})



