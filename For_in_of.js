const cars = ["Benz","BMW"]

const car = { 

    name: "Benz",
    price: 12000,
    quantity: 25,
    available: true,
}

for(const key in car)
{
    console.log(key);
}

for(const value of cars)
{
    console.log(value);
}