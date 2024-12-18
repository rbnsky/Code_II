namespace OldMacDonaldsFarm {

    class Animal {
        public name: string;
        public type: string;
        public food: string;
        public appetite: number;
        public sound: string;

        public constructor(_name: string, _type: string, _food: string, _appetite: number, _sound: string) {
            this.set(_name, _type, _food, _appetite, _sound);
        }
    
        public set(_name: string, _type: string, _food: string, _appetite: number, _sound: string): void {
            this.name = _name;
            this.type = _type;
            this.food = _food;
            this.appetite = _appetite;
            this.sound = _sound;
        }

        public eat(_type: string, _food: string, _appetite: number): void {

        }

        public sing(_name: string, _sound: string): void {

        }
    }

    class Food {
        type: string;
        amount: number;

        public constructor(_type: string, _amount: number) {
            this.set(_type, _amount);
        }

        public set(_type: string, _amount: number): void {
            this.type = _type;
            this.amount = _amount;
        }

        consumtion(_type: string, _amount: number): void {

        }
    }
    
    const animals: Array<Animal> = [];
    animals.push(new Animal("Henriette", "Chicken", "Seeds", 56, "Gawk-gawk"));
    animals.push(new Animal("Kermit", "Frog", "Flies", 10, "Ribbit"));
    animals.push(new Animal("Pferdinand", "Horse", "Apples", 12, "Hüüü"));
    animals.push(new Animal("Sneaky", "Fox", "Rabbits", 1, "Hati-hati-hati-how"));
    animals.push(new Animal("Frieda", "Cat", "Fish", 2, "Meow"))

    const stockpile: Array<Food> = [];
    stockpile.push(new Food("Seeds", 1032));
    stockpile.push(new Food("Flies", 137));
    stockpile.push(new Food("Apples", 28));
    stockpile.push(new Food("Rabbits", 5));
    stockpile.push(new Food("Fish", 9));
}