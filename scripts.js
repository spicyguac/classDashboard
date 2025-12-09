const searchClassButton = document.getElementById("searchClass");
const userInput = document.getElementById("classCode");
const aSkillsClasses = new Map();
const lincolnClasses = new Map();
const lMonday = new Map();
const lTuesday = new Map();

lMonday.set('C', './aSkills/lincoln/monday/weeklyDashboard.html');


lTuesday.set("9", './aSkills/lincoln/tuesday/weeklyDashboard9W.html');


lTuesday.set("6", './aSkills/lincoln/tuesday/weeklyDashboard6C.html');

lincolnClasses.set('M', lMonday);
lincolnClasses.set('T', lTuesday);

aSkillsClasses.set('L', lincolnClasses);



document.addEventListener("DOMContentLoaded", function() {
    // console.log(lTuesday.get('9W'))
    searchClass();
})


function searchClass() {

    searchClassButton.addEventListener("click", () => {
        const inputValue = userInput.value;
        
        // Convert it to all lower or caps?
        let codeArray = inputValue.split("");
        let found;
        let locationOfClass;
        let dayOfClass;
        let typeOfClass;
        if (codeArray.length >= 5){
            if (codeArray[0] == 'a'){
                try {
                    locationOfClass = aSkillsClasses.get(codeArray[1])
                    dayOfClass = locationOfClass.get(codeArray[2]);
                    typeOfClass = dayOfClass.get(codeArray[3]);
                    //console.log(typeof codeArray[3]);
                    window.location.href = typeOfClass;
                } catch (error) {
                    console.log(error)
                }
                
            }else{

            }
        }

        if (found = 0){
            
        }
        searchClass()


        //console.log(c);
    })
}