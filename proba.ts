function Decorator (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const modifiedArgs = args.map(arg => {
            if (typeof arg === 'string') {
                return arg.toUpperCase();
            }
            return arg;
        });

        return originalMethod.apply(this, modifiedArgs);
    };

    return descriptor;
}

class User {
    name: string;

    get Name(): string {
        return this.name;
    }

    set Name(value: string) {
        this.name = value;
    }

    constructor(name: string) {
        this.name = name;
    }

    @Decorator
    print(prefix: string, message: string): void {
        console.log(prefix +':'+ message + '-' + this.name);
    }
}

const user = new User("Иван");
user.print("INFO", "Сообщение");
