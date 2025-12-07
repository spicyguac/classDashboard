const searchClassButton = document.getElementById("searchClass");
const userInput = document.getElementById("classCode");
const aSkillsClasses = new Map();
const lincolnClasses = new Map();
const mondayClasses = new Map();

mondayClasses.set('A', './about/about.html');
lincolnClasses.set('M', mondayClasses);
aSkillsClasses.set('L', lincolnClasses);



document.addEventListener("DOMContentLoaded", function() {
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