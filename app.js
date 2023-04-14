console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// for loop
// for (num =1; num <= 100; num++)
// {
//     if (num%2 == 1)
//     {
//         console.log(num);
//     }
// }


// Exercise 3 Section
// while loop

// let num = 1;
// while (num <= 100)
// {
//     if (num%2 == 1)
//     {
//         console.log(num);
//     }
//     num += 1;
// }

// do-while loop
let num = 1;
do
{
    if (num%2 == 1)
    {
        console.log(num);
    }
    num += 1;
}while (num <= 100);


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

// for loop
// for (num = 1; num <= 100; num++)
// {
//     if (num%3 == 0 && num%5 == 0)
//     {
//         console.log("FIZZBUZZ");
//     }
//     else if (num % 3 == 0)
//     {
//         console.log("FIZZ");
//     }
//     else if (num % 5 == 0)
//     {
//         console.log("BUZZ");
//     }
// }

// Exercise 3 Section
// while loop

// num = 1;
// while(num <= 100)
// {
//     console.log(num)
//     if (num%3 == 0 && num%5 == 0)
//     {
//         console.log("FIZZBUZZ");
//         num += 1;
//     }
//     else if (num % 3 == 0)
//     {
//         console.log("FIZZ");
//         num += 1;
//     }
//     else if (num % 5 == 0)
//     {
//         console.log("BUZZ");
//         num += 1;
//     }
//     else
//     {
//         num += 1;
//     }
// }

// do-while loop
num = 1;
do
{
    console.log(num)
    if (num%3 == 0 && num%5 == 0)
    {
        console.log("FIZZBUZZ");
        num += 1;
    }
    else if (num % 3 == 0)
    {
        console.log("FIZZ");
        num += 1;
    }
    else if (num % 5 == 0)
    {
        console.log("BUZZ");
        num += 1;
    }
    else
    {
        num += 1;
    }
}while(num <= 100);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); 
console.log(value);
let n = Math.round(Math.random() * (500 - 100) + 100); 
console.log(n);

for (num = 1; num <= n; num++)
{
    if (num == value)
    {
        console.log("Found value!")
        break;
    }    
}
if (num != value)
{
    console.log("Did not find value")
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let number = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (i = start; i <= number; i++)
{
    console.log(i);
    if (i % fizzDivisor == 0 && i % buzzDivisor == 0)
    {
        console.log("FIZZBUZZ");
    }
    else if (i % fizzDivisor == 0)
    {
        console.log("FIZZ");
    }
    else if (i % buzzDivisor == 0)
    {
        console.log("BUZZ");
    }
}