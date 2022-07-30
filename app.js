var getCourseButton = document.querySelector('#fetch-courses');
var buttonContainer = document.querySelector('.get-course-button');

//course display
var courseDisplay = document.querySelector('.course-display');
courseDisplay.style.display = "none";

getCourseButton.addEventListener('click',function(){
  console.log(123);
  buttonContainer.style.display = "none";
  courseDisplay.style.display = "flex";
  
  fetchCourses();
});
  

function fetchCourses(){

  var targetURL = 'https://codingninjas.in/api/v3/courses';
  var xhrRequest = new XMLHttpRequest();

  xhrRequest.open('GET',targetURL,true);
  xhrRequest.send();

  xhrRequest.onload = function(){
    var responseJSON = JSON.parse(xhrRequest.response);
    var pageLimit = 30;
    //console.log(responseJSON.data.courses[0].title);
    for(var i = 0; i < pageLimit; i += 3){
    var courseImage = responseJSON.data.courses[i].preview_image_url;
    var courseName = responseJSON.data.courses[i].title;
    var courseType = responseJSON.data.courses[i].level;
    // console.log(courseImage, courseName, courseType);
    // console.log('_____________________________________');

    const el = document.createElement('div');
    el.classList.add('course-list');
    el.innerHTML = `<img src="${courseImage}"</img>`;
    const courseDisplay = document.querySelector('.course-display');
    courseDisplay.appendChild(el);

    const courseDetails = document.createElement('div');
    courseDetails.classList.add('course-details');
    courseDetails.innerHTML = `<h3 class = "course-name"> ${courseName} </h3>
                              <h5 class="course-type">${courseType}</h5>`;
    el.appendChild(courseDetails);
    }
    
  }
}

{/* <div class="course-list">
        <img src="img/workout.jfif" alt="">
        <div class="course-details">
          <h3 class="course-name">Machine Learning with Python</h3>
          <h5 class="course-type">Advanced Course</h5>
        </div>
</div> */}

