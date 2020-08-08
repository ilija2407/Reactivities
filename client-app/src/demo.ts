let data = "";

export interface ICar {
    color: string;
    model: string;
    topSpeed ? : number;
}


const car:ICar = {
    color: "blue",
    model: "BMW"
}

const car2:ICar = {
    color: "red",
    model : "Audi",
    topSpeed : 100
}

export const cars = [car, car2]

const mulitply = (x :number,y:number): string => {
    return (x*y).toString();
}