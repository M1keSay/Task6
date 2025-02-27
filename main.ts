function SealedClass(constructor: Function) {
    Object.seal(constructor.prototype);
} 
function ToUpperCase(method: Function) {
    return function (this: any, ...args: any[]) {
        const result = method.apply(this, args);
        return result.toUpperCase();
    }
}

enum TypeOfDocument {
    Passport = "Паспорт",
    IDCard = "ID карты",
}

interface Owner {
    get Surname(): string;
    get Name(): string;
    get Patronymic(): string; 
    get BirthDate(): Date;
    get DocumentType(): TypeOfDocument; 
    get DocumentSeries(): string;
    get DocumentNumber(): string;
    printInfoOwner(): void;
}

class OwnerClass implements Owner {
    private surname: string;
    private name: string;
    private patronymic: string;
    private birthDate: Date;
    private documentType: TypeOfDocument;
    private documentSeries: string;
    private documentNumber: string;

    get Surname(): string {
        return this.surname;
    }
    set Surname(value: string) {
        this.surname = value;
    }
    
    get Name(): string {
        return this.name;
    }
    set Name(value: string) {
        this.name = value;
    }
    
    get Patronymic(): string {
        return this.patronymic;
    }
    set Patronymic(value: string) {
        this.patronymic = value;
    }

    get BirthDate(): Date {
        return this.birthDate;
    }
    set BirthDate(value: Date) {
        this.birthDate = value;
    }

    get DocumentType(): TypeOfDocument {
        return this.documentType;
    }
    set DocumentType(value: TypeOfDocument) {
        this.documentType = value;
    }

    get DocumentSeries(): string {
        return this.documentSeries;
    }
    set DocumentSeries(value: string) {
        this.documentSeries = value;
    }

    get DocumentNumber(): string {
        return this.documentNumber;
    }
    set DocumentNumber(value: string) {
        this.documentNumber = value;
    }
    
    constructor(
        surname: string,
        name: string,
        patronymic: string,
        birthDate: Date,
        documentType: TypeOfDocument,
        documentSeries: string,
        documentNumber: string
    ) {
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
        this.birthDate = birthDate;
        this.documentType = documentType;
        this.documentSeries = documentSeries;
        this.documentNumber = documentNumber;
    }

    public printInfoOwner(): void {
        console.log("Информация про владельца: " + 
        "\nФамилия: " +  this.surname+
        "\nИмя: " + this.name +
        "\nОтчество: " + this.patronymic +
        "\nДень рождения: "  + this.birthDate.toDateString() +
        "\nТип документа: "  + this.documentType +
        "\nСерия: " + this.documentSeries +
        "\nНомер: " + this.documentNumber);
    }
}


// Интерфейс Транспортное средство
interface Vehicle {
    get Mark(): string;
    get Model(): string;
    get Year(): number;
    get Vin(): string;
    get RegistrationNumber(): string;
    get Owner(): Owner;
    printInfo(): void;
}

// Класс, реализующий интерфейс Транспортное средство
class VehicleImpl implements Vehicle {
    
    private mark: string;
    private model: string;
    private year: number;
    private vin: string;
    private registrationNumber: string;
    private owner: Owner;
    get Mark(): string {
        return this.mark;
    }
    set Mark(value: string) {
        this.mark = value;
    }
    get Model(): string{
        return this.model;
    }
    set Model(value: string) {
        this.model = value;
    }
    get Year(): number{
        return this.year;
    }
    set Year(value: number) {
        this.year = value;
    }
    get Vin(): string{
        return this.vin;
    }
    set Vin(value: string) {
        this.vin = value;
    }
    get RegistrationNumber(): string{
        return this.registrationNumber;
    }
    set RegistrationNumber(value: string) {
        this.registrationNumber = value;
    }
    get Owner(): Owner{
        return this.owner;
    }
    set Owner(value: Owner) {
        this.owner = value;
    }
    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner
    ) {
        this.mark = brand;
        this.model = model;
        this.year = year;
        this.vin = vin;
        this.registrationNumber = registrationNumber;
        this.owner = owner;
    }
    
    public printInfo(): void {
        console.log("Информация про Траснпортное средство: " + 
        " Марка: " + this.mark + 
        " Модель:  " + this.model +
        " Год: " + this.year +
        " VIN: " + this.vin +
        " Регистрационный номер:" + this.registrationNumber);
    }
    @ToUpperCase
    getCarInfo(): string {
        return `Марка: ${this.mark}, Модель: ${this.model}`;
    }
}


enum BodyType {
    Sedan = "Седан",
    Coupe = "Купе",
    Hatchback = "Хэтчбэк"
}

enum CarClass {
    Economy = "Эконом",
    Standard = "Стандарт",
    Luxury = "Люкс"
}

interface Car extends Vehicle {
    TypeOfBody: BodyType;
    ClassOfCar: CarClass;
}
@SealedClass
class CarImpl extends VehicleImpl implements Car {
    private typeOfBody: BodyType;
    private classOfCar: CarClass;

    get TypeOfBody(): BodyType {
        return this.typeOfBody;
    }

    get ClassOfCar(): CarClass {
        return this.classOfCar;
    }

    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner,
        bodyType: BodyType,
        carClass: CarClass
    ) {
        super(brand, model, year, vin, registrationNumber, owner);
        this.typeOfBody = bodyType;
        this.classOfCar = carClass;
    }

    public printInfo(): void {
        super.printInfo();
        console.log("Тип кузова: " + this.TypeOfBody + 
        "\nКласс Машины: " + this.ClassOfCar);
    }
    

// Интерфейс Мотоцикл

}
const owner1 = new OwnerClass("Капранов", "Василий", "Генадьевич", new Date(1990, 1, 1), TypeOfDocument.Passport, "1234", "567890");
const car1 = new CarImpl("Toyota", "Camry", 2020, "QWERTYU789632", "ABC123", owner1, BodyType.Sedan, CarClass.Luxury);

//Object.defineProperty("UV", "Color", { value: "Black"});
console.log(car1.getCarInfo());