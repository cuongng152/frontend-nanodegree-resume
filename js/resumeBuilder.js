/*
This is empty on purpose! Your code to build the resume will go here.
 */



//Creating personal information
var bio ={
    "name" : "Cuong Nguyen",
    "role" :  "Web Developer",
    "contacts" : {
        "mobile" : "0450-766-930",
        "email" : "nmcuong152@gmail.com",
        "github" : "cuongng152",
        "location" : "Sydney"
    },
    "welcomemessage" : "Welcome to my resume",
    "skills" : [
        "Teamwork", "Time Management", "Critical Thinking", "Problem Solving"
    ],
    "bioPic" : "/Users/cuongnguyen/Desktop/Udacity/Portfolio/Design mockup/Image/IMG_3666.JPG"
};

//Education information
var education = {
    "schools" : [
        {
            "name": "Swinburne University of Technology",
            "location": "Melbourne",
            "degree": "Master",
            "major": "Information Technology Business Analysis",
            "date": "2016",
        },
        {
            "name": "Academy of Finance",
            "location": "Hanoi",
            "degree": "Bachelor",
            "major": "Finance and Banking",
            "date": "2014",
        }
    ],
     "onlineCourses": [
         {   
             "name": "Front-End Web Developer",
             "school": "Udacity",
             "date": "2017",
             "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
         },
         {
             "name": "Introduction to HTML, CSS and Responsive Web Design",
             "school": "Udacity",
             "date": "2017",
             "url": "https://www.udacity.com"
         },
         {
             "name": "Introduction to Javascript and jQuerry",
             "school": "Udacity",
             "date": "2017",
             "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
         },
         {
             "name": "Object Oriented Javascript",
             "school": "Udacity",
             "date": "2017",
             "url": "https://www.udacity.com"
         },
         {
             "name": "Website Performance Optimization",
             "school": "Udacity",
             "date": "2017",
             "url": "https://www.udacity.com"
         },
         {
             "name": "Introduction to AJAX, Javascript Design Pattern and Google API",
             "school": "Udacity",
             "date": "2017",
             "url": "https://www.udacity.com"
         }
     ]
};

//Working experience
var work = {
    "jobs": [
        {
            "employer": "BitCoin Group",
            "date": "07/2016 - 12/2016",
            "title": "Junior Business Analyst Internship",
            "description": "I am involved in a team responding to improve competitive advantages for Bitcoin Group in term of doing comparative analysis among different private blockchain database system. I am responsible for gathering all requirements, analyze it and prioritize before recommend testing those blockchain platforms."
        },
        {
            "employer": "Okra restaurant",
            "date": "04/2016 - Now",
            "title": "Kitchen Hand",
            "description": "My third job in Melbourne, Australia, is a main kitchen hand in Asian-fusion restaurant in peaceful suburb, Camberwell. It is a nice working environment, good salary too and I enjoy cooking some entrees for our customers. I learnt to cook Asian entree at the time I worked there. It actually taught me a lot of skills which I do believe it will be useful for me for the rest of my life. It might be time management, teamwork, working under high pressure."
        },
        {
            "employer": "Hush Hush coffee",
            "date": "08/2015 - 01/2016",
            "title": "Kitchen Hand",
            "description": "My second job is a kitchen hand in a small but lovely coffee shop at Camberwell arcade. It is not quite crowded coffee shop but have a lovely view in a small arcade in Camberwell Road. I have experienced an atmostphere of typical morning in Melbourne, the way people enjoying their cup of coffee before commuting to work. I also understand the unique coffee culture in Melbourne through the time I worked here. I really appreciate such experiences I have at Hush Hush Coffee."
        },
        {
            "employer": "Orsini Restaurant",
            "date": "03/2015 - 07/2015",
            "title": "Diswasher",
            "description": "This is my first part-time job when I have moved to Australia to study in 2015. It not only helped me learning how to earn money by myself but it also taught me several lessons in life. Moreover, I also learnt how to balance time for working and studying and at the end of this semester, I have collected enough money to participate in short-term training making coffee, which lead me to second job. My main duties in this job was washing plates, prepare ingredients for head chef and I also learnt kinef-using skills which benefits me a lot in cooking later on."
        }
    ]
};

//Project
var projects = {
    "projects": [
        {
            "title": "Animal Trading Card",
            "date": "03/2017",
            "description": "This is my first project after I have completed short course of HTML and CSS. I have learnt fundamental components of how to use HTML and CSS to create a website. If HTML equipped me a knowledge to create content of any website, CSS provides a stunning tool to make it more beautiful. I also learnt how to use supported tool so-called Bootstrap to help me save time in designing a website with provided template.",
            "images": [" "]
        },
        {
            "title": "Onine resume",
            "date": "04/2017",
            "description": "Purpose of this project is teaching me how to apply knowledge which I have learnt in Introduction to Javascript combined with HTML and CSS to create a stunning resume which not only demonstrates my understanding in using front-end web development tools but it also shows a creative way to introduce myself to employers.",
            "images": [" "]
        },
        {
            "title": "Classic Arcade Game Clone",
            "date": "05/2017",
            "description": "To be filled later",
            "images": [" "]
        },
        {
            "title": "Website Optimization",
            "date": "04/2017",
            "description": "To be filled later",
            "images": [" "]  
        },
        {
            "title": "Neighborhood Map",
            "date": "04/2017",
            "description": "To be filled later",
            "images": [" "]
        }
    ]
};

//Append changes into Bio information 

//Name and role
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomemessage);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

    //Must use prepend because we are adding things at the beginning of the header.
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    //Changing message and picture
    $("#header").append(formattedMessage);
    $("#header").append(formattedBioPic);

    //Chaning contact details
    var formattedMoible = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    var id = ["#topContacts", "#footerContacts"];
    for (var i = 0; i <id.length; i++) {
        $(id[i]).append(formattedMoible);
        $(id[i]).append(formattedEmail);
        $(id[i]).append(formattedGithub);
        $(id[i]).append(formattedLocation);
    };

    //Changing skills
    if (bio.skills.length > 0 ){
        //Replace header section
        $("#header").append(HTMLskillsStart);

        //Replace skills section
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);

        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);

        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);

        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
    };
};

//Changing job
work.display = function() {
    for (job in work.jobs) {
        //create new div for work experience
        $("#workExperience").append(HTMLworkStart);
        //concat employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].date);
        $(".work-entry:last").append(formattedDate);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

//Changing projects 
projects.display = function() {
    for (project in projects.projects) {
        //create new div for projects
        $("#projects").append(HTMLprojectStart);
        
        //concat projects title, date and description
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        
        var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].date);
        $(".project-entry:last").append(formattedDate);
        
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        
        if (projects.projects[project].images.length > 0){
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
        
    }
};

//Display education's chools 
education.display = function() {
   
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedName);
        
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);
        
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedDegree);
        
        var formattedDate = HTMLschoolDates.replace("%data%", education.schools[school].date);
        $(".education-entry:last").append(formattedDate);
        
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedMajor);
    }

        $("#education").append(HTMLonlineClasses);
        for(onlineCourse in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);

        var formattedcourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].name);
        $(".education-entry:last").append(formattedcourseTitle);

        var formattedcourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        $(".education-entry:last").append(formattedcourseSchool);

        var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
        $(".education-entry:last").append(formattedDate);

        var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
        $(".education-entry:last").append(formattedUrl);
    }
};


bio.display();
education.display();
work.display();
projects.display();

//Adding a google map
$("#mapDiv").append(googleMap);

$(document).click(function(loc){
  var x = loc.pageX;
  var y = loc.pageY;
                  
  logClicks(x,y);
                
});









