$(document).ready(function() {
    // Final exam details
    let examDate = "Friday, May 3rd";
    let examTime = "3:30pm - 5:30pm";
    let examLocation = "IO240, Innovation Building";
    \
    $('#exam-details').html(`<p><strong>Date:</strong> ${examDate}</p>
                             <p><strong>Time:</strong> ${examTime}</p>
                             <p><strong>Location:</strong> ${examLocation}</p>`);

    const projectSummary = "For my final project, I'm planning to build a web application centered around One Piece the anime using CRUD operations with a dedicated API. I'll leverage endpoints like GET /characters/{name}, GET /characters?devilFruit={type}, GET /characters/all, and GET /episodes/{episodeNumber} to dynamically fetch character and episode data. With the power of jQuery, I'll populate the webpage in real time with this information, incorporating smooth animation effects to enhance user interaction. This project will showcase my skills in API integration, CRUD operations, and creating dynamic web experiences that were learned throughout the class. This final project will be due on Monday April 29th, 2024 at 11:59 pm";

    $('#project-summary').text(projectSummary);
    $('#project-summary').hide().fadeIn(1000); 
});
