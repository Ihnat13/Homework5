const numbers = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let sum = 0;
let positiveNumCount = 0;
let negativeNumCount = 0;
let maxArrValue = 0;
let maxArrValueIndex = 0;
let oddPositiveEl = 0;
let evenPositiveEl = 0;
let sumEvenPositiveEl = 0;
let sumOddPositiveEl = 0;
let sumOnlyPositiveEl = 0;

for (let i = 0;i < numbers.length; i++){
    sum = sum + numbers[i]
                              
    if (numbers[i] > 0) {
        sumOnlyPositiveEl = sumOnlyPositiveEl + numbers[i]; 
        positiveNumCount++;
    }
    if (numbers[i] > maxArrValue) {
        maxArrValue = numbers[i];                           
        maxArrValueIndex = i+1;
    }
    if (numbers[i] < 0) {
        negativeNumCount++;                                 
    }
    if(numbers[i] > 0 && numbers[i] % 2 !== 0){
        sumOddPositiveEl = sumOddPositiveEl + numbers[i]    
        oddPositiveEl++;                                    
    }
    if(numbers[i] > 0 && numbers[i] % 2 === 0){
        sumEvenPositiveEl = sumEvenPositiveEl + numbers[i]  
        evenPositiveEl++;                                  
    }
}

alert(`Сума позитивних елементів : ${sum}
Kiлькiсть позитивних елементів: ${positiveNumCount}
Максимальний елемент масиву : ${maxArrValue}
Порядковий номер максимального елементу масиву : ${maxArrValueIndex}
Кількість негативних елементів : ${negativeNumCount}
Кількість непарних позитивних елементів $:${oddPositiveEl}
Кількість парних позитивних елементів : ${evenPositiveEl}
Суму парних позитивних елементів : ${sumEvenPositiveEl}
Суму непарних позитивних елементів : ${sumOddPositiveEl}
Добуток позитивних елементів : ${sumOnlyPositiveEl}`
    )


/*
16 + (-37) + ....
16>0 
-37 < 0 

*/