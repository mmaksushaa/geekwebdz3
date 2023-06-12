function tellYourName(){
    let name = prompt("Напишите ваше имя?");
    alert(`Привет, ${name}`)
}

tellYourName();

function tellYourAge(){
    let age =Number(prompt("Сколько вам лет ?"))
    switch (age) {
        case (age < 0):
          alert("Не ври");
          break;
        case (1 < age < 150):
            alert("Хорошего дня")
            break;
        case (age > 150):
            alert("Не ври")
    }            
}

tellYourAge();