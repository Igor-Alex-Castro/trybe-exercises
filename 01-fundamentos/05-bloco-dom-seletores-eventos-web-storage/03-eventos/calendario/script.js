function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  //-------------------------
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  let days = document.querySelector("#days")

  for(d in dezDaysList){
    console.log(dezDaysList[d])
    
    let day = document.createElement("li")
    day.className = "day"
    day.innerText = dezDaysList[d]
    days.appendChild(day)
    
    if (dezDaysList[d] === 24 ||dezDaysList[d] === 25 || dezDaysList[d] === 31){
      day.className += " holiday"
    }
  }


  //----------------------------------------
  let buttons_container = document.querySelector(".buttons-container")

  let btn_holiday = document.createElement("button")
  
  btn_holiday.innerText = "Feriados"
  btn_holiday.name = "  feriados"
  btn_holiday.id = "feriados"
  buttons_container.appendChild(btn_holiday)

  btn_holiday.addEventListener("click", feriados);
  let clickHoliday = 0
  function feriados(){
    clickHoliday += 1
    console.log(clickHoliday)
    for(d in days.children){
      let day = days.children[d].className
      if( day === 'day holiday'){
        if(clickHoliday === 1){
          days.children[d].style.background = "yellow";
        }else{
          days.children[d].style.background = "rgb(238,238,238)";
          clickHoliday = 0
        }
      }
          
    }
    
  }
//----------------------------------------------
let btn_friday = document.createElement("button")
btn_friday.innerText = "Sexta"
btn_friday.name = "sexta"
btn_friday.id = "btn-friday"
buttons_container.appendChild(btn_friday)


btn_friday.addEventListener("click", apperFriday)

let clickSexta = 0
function apperFriday(){
  clickSexta += 1
  for(let index =0; index < days.children.length; index += 1){
     if((index === 5 || index === 12 || index === 19 || index === 26)){
        if(clickSexta === 1){
          days.children[index].innerText = "Sexta-feira"
        }else{
          days.children[index].innerText = index - 1
          clickSexta = 0 
        }
     
     }
      
  }


}

//-------------------------------------------------------------------------------
for(d in days.children){
  let day = days.children[d]
  day.addEventListener("mouseover", function(){
  day.style.fontSize="30px" 

  day.addEventListener("mouseout", function(){
  day.style.fontSize="20px"
  })
  });
}

