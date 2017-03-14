/*
This is empty on purpose! Your code to build the resume will go here.
/*
This is empty on purpose! Your code to build the resume will go here.
 */



//Creating personal information
var bio ={
    "name" : "Cuong Nguyen",
    "role" :  "Web Developer",
    "contact" : {
        "mobile" : "0450-766-930",
        "email" : "nmcuong152@gmail.com",
        "github" : "cuongng152",
        "location" : "Sydney"
    },
    "welcomemessage" : "Welcome to my resume",
    "skills" : [
        "Teamwork", "Time Management", "Critical Thinking", "Problem Solving"
    ],
    "bioPic" : '/Users/cuongnguyen/Desktop/Udacity/Portfolio/Design mockup/Image/IMG_3666.JPG'
};

//Education information
var education = {
    "schools" : [
        {
            "name": "Swinburne University of Technology",
            "city": "Melbourne",
            "degree": "Master",
            "major": "Information Technology Business Analysis",
            "date": "2015",
        },
        {
            "name": "Academy of Finance",
            "city": "Melbourne",
            "degree": "Master",
            "major": "Information Technology Business Analysis",
            "date": "2015",
        }
    ],
     "onlineCourses": [
         {
             "name": "Introduction to JavaScript",
             "school": "Udacity",
             "date": "2017",
             "url": "https://www.udacity.com"
         },
         {
             "name": "Front-End Web Developer",
             "school": "Udacity",
             "date": "2017",
             "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
         }
     ]
};

//Working experience
var work = {
    "jobs": [
        {
            "employer": "Orsini Restaurant",
            "date": "2015",
            "title": "Diswasher",
            "description": "Washing plates and prepare some ingredient for head chef. Plus, how to learn kinfe-using skill"
        },
        {
            "employer": "Hush Hush coffe",
            "date": "2015",
            "title": "Kitchen Hand",
            "description": "Washing plates, prepare some ingredient for head chef. Preparing foods and serving on-the-way order for customers"
        },
        {
            "employer": "Okra restaurant",
            "date": "2016",
            "title": "Kitchen Hand",
            "description": "Washing plates, preparing food for main course. Taking care all of the entree course with knowledge of Asian-fusion food including Thailand, Malaysia, Indonesia."
        }
    ]
};

//Project
var projects = {
    "projects": [
        {
            "title": "Animal Trading Card",
            "date": "2017",
            "description": "Using fundamental knowledge in HTML5 and CSS3 to design an animal trading card",
            "images": ["Image/IMG_3666.JPG", "Image/IMG_3656.JPG"]
        },
        {
            "title": "Onine resume",
            "date": "2017",
            "description": "Creating online resume using HTML5, CSS3 and JavaScript with hope to create a stunning resume containing all my information with impressive interaction",
            "images": ["Image/IMG_3664.JPG", "Image/IMG_3666.JPG"]
        }
    ]
};

//Append changes into Bio information 

//Name and role
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").append(formattedName);
$("#header").append(formattedRole);

//Changing message and picture
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomemessage);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

$("#header").append(formattedMessage);
$("#header").append(formattedBioPic);

//Chaning contact details
var formattedMoible = HTMLmobile.replace("%data%", bio.contact.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);

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


//Changing job
function displayWork() {
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

displayWork();

//Display education's chools
function displayEducation() {
    for (education in education.schools) {
        //Create new div for education's schools
        $("#education").append(HTMLschoolStart);
        
        //Appending elements
        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[education].name);
        var formattedschoolCity = HTMLschoolLocation.replace("%data%", education.schools[education].city);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data", education.schools[education].degree);
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[education].major);
        var formattedschoolDate = HTMLschoolDates.replace("%data%", education.schools[education].date);
        
        $(".education-entry:last").append(formattedschoolName);
        $(".education-entry:last").append(formattedschoolCity);
        $(".education-entry:last").append(formattedschoolDegree);
        $(".education-entry:last").append(formattedschoolMajor);
        $(".education-entry:last").append(formattedschoolDate);
    }
}

displayEducation();


//Changing projects
projects.display = function() {
    for (project in projects.projects) {
        //create new div for projects
        $("#projects").append(HTMLprojectStart);
        
        //concat projects title, date and description
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        
        var formattedDate = HTMLprojectTitle.replace("%data%", projects.projects[project].date);
        $(".project-entry:last").append(formattedDate);
        
        var formattedDescription = HTMLprojectTitle.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        
        if (projects.projects[project].images.length > 0){
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
        
    }
}

//International name
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toUpperCase();
    
    return name(0) + " " + name[1];
}

$('#main').append(internationalizeButton);
//Adding a google map
$("#mapDiv").append(googleMap);








