// set initial count
let count = 0
// here we can use query selector to select each button but we have another option which is select all the button that have the generic class which is btn
// and then add event listner and then loop through it and check the class so that if it is decrease then we will decrease the value
//select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn')

console.log(btns)
// here in the console we will see that the NodeList so that we can do foreach on it but this is unordered list so that we will convert it to array to perfom the array methods on it
btns.forEach(function(btn){
    //here in the console we will see all the buttons 
    console.log(btn)
    //we will put eventlistner for each btn
    btn.addEventListener('click',function(e){
        // I accessed to the e because I want to check which btn I clicked on it because I have a list so I will use the event object to check which is the button that the user clicked
        //we console all the classes that the selected btn has
        console.log(e.currentTarget.classList)
        const styles = e.currentTarget.classList 
        // here we will use if statement to check if the styles contain a specific class 

        if(styles.contains('decrease')){
            count --;
        }
        else if(styles.contains('increase')){
            count ++;
        }
        else{
            count = 0;
        }
        if(count >0){
            value.style.color = "green"
        }
        if(count <0){
            value.style.color = "red"
        }if(count === 0){
            value.style.color = "black"
        }
        value.textContent = count     
    })


})