function Car(brand,name,height,length,door,Benzin,EV,likes){

    this.brand = brand,
    this.name = name,
    this.height = height,
    this.length = length,
    this.door = door,
    this.Benzin = Benzin,
    this.EV = EV,
    this.likes = likes,
    like(){
        this.likes = likes++;
    }
}

var Car1 = new Car("Mercedes Benz","C200","120","450","4",true,true,0);
Car1.like();

document.write(Car1);