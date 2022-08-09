const mechanicalProjects = [
    ["./projectsImages/inclusiveDrillRedesign.JPG","Inclusive Drill Redesign","Redesigning a drill for a broader market","REFRESH"],
    ["./projectsImages/designForLoading.png","Design for Loading","Altering a member for specified loaded behavior","Solidworks"],
    ["./projectsImages/assemblyOfAJuicer.JPG","Assembly of a Juicer","Assembly of predesigned juicer components","Solidworks"],
    ["./projectsImages/mechanicalMotionTransfer.JPG","Mechanical Motion Transfer","Simulating a motion transfer system","MatLab"],
    ["./projectsImages/toolRackFEA.JPG","Tool Rack FEA","Modelling and FEA on a Tool Rack","Solidworks"], //Swap image for FEA analysis image
    ["./projectsImages/productTeardown.png","Reverse Engineering BPM","Teardown and Study of Blood Pressure Monitor","Solidworks"],
    ["./projectsImages/phoneCaseModel.JPG","Phone Case Modelling","Designing a simple iphone case","Solidworks, Fusion360"] //Make phone case in Fusion360
];

const softwareProjects = [
    ["./projectsImages/localLaborPartners.png","Ecommerce Website","Fullstack development of small Ecommerce labor arbitrage platform","ReactJS, TailwindCSS, Stripe"], //Swap to image of local labor partnership
    ["./projectsImages/imageManipulation.png","Image Manipulation","Simple Image Compression/Decompression tool","C, Hanson's Interfaces & Implementations"],
    ["./projectsImages/portfolioWebsite.png","My Portfolio Website","Developing a portfolio website with the basics","HTML,CSS, JavaScript"], // Add in image of portfolio website homepage
    ["./projectsImages/","Assembly of a Juicer","Assembly of Juicer Components","Solidworks"], // Black edge removal tool
];

const roboticsProjects = [
    ["./projectsImages/pcbPowerSupply.JPG","PCB Power Supply Design","Developing a basic PCB power supply","Breadboard, KiCad"],
    ["./projectsImages/pcbMotorController.JPG","PCB Motor Controller Design","Developing a custom PCB motor controller","Breadboard, KiCad"] //Brush up 
];


function populateProjects(projectsArray){
    console.log("in js");
    let inputString = "";

    for (let i = 0; i < projectsArray.length; i++) {
        inputString += '<div class="gridItem"><div class="marginOuter"><div class="marginInner" div onclick="#" style="cursor: pointer;"><div class="contentArea" style="overflow: hidden;">';
        inputString += '<img class="contentImg" src="';
        inputString += projectsArray[i][0];  //Project Image Location
        inputString += '"><br></div><div class="overlay"><div class="overlayText"><p class="textColorDarkGrey">';

        inputString += '<strong id="projectName">Name: ';
        inputString += projectsArray[i][1];  //Project Name
        inputString += '</strong><br>';

        inputString += '<strong id="projectSentence">Description: </strong>';
        inputString += projectsArray[i][2];   //Project Description
        inputString += '<br><br>';

        inputString += '<strong id="projectSkills">Skills & Technologies: </strong> <br>';
        inputString += projectsArray[i][3];    //Project Skills
        inputString += '<br><br>';

        inputString += '<div class="clickMe"><a><strong class="textColorDarkGrey">Click for more details!</strong></a></div></p></div></div></div></div></div>'

      }

      inputString += '<div class="gridItem"></div>';


      document.getElementById('projectsGrid').innerHTML += inputString;
}