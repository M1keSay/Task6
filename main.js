var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
function SealedClass(constructor) {
    Object.seal(constructor.prototype);
}
function ToUpperCase(method) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var result = method.apply(this, args);
        return result.toUpperCase();
    };
}
var TypeOfDocument;
(function (TypeOfDocument) {
    TypeOfDocument["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
    TypeOfDocument["IDCard"] = "ID \u043A\u0430\u0440\u0442\u044B";
})(TypeOfDocument || (TypeOfDocument = {}));
var OwnerClass = /** @class */ (function () {
    function OwnerClass(surname, name, patronymic, birthDate, documentType, documentSeries, documentNumber) {
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
        this.birthDate = birthDate;
        this.documentType = documentType;
        this.documentSeries = documentSeries;
        this.documentNumber = documentNumber;
    }
    Object.defineProperty(OwnerClass.prototype, "Surname", {
        get: function () {
            return this.surname;
        },
        set: function (value) {
            this.surname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerClass.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (value) {
            this.name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerClass.prototype, "Patronymic", {
        get: function () {
            return this.patronymic;
        },
        set: function (value) {
            this.patronymic = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerClass.prototype, "BirthDate", {
        get: function () {
            return this.birthDate;
        },
        set: function (value) {
            this.birthDate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerClass.prototype, "DocumentType", {
        get: function () {
            return this.documentType;
        },
        set: function (value) {
            this.documentType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerClass.prototype, "DocumentSeries", {
        get: function () {
            return this.documentSeries;
        },
        set: function (value) {
            this.documentSeries = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerClass.prototype, "DocumentNumber", {
        get: function () {
            return this.documentNumber;
        },
        set: function (value) {
            this.documentNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    OwnerClass.prototype.printInfoOwner = function () {
        console.log("Информация про владельца: " +
            "\nФамилия: " + this.surname +
            "\nИмя: " + this.name +
            "\nОтчество: " + this.patronymic +
            "\nДень рождения: " + this.birthDate.toDateString() +
            "\nТип документа: " + this.documentType +
            "\nСерия: " + this.documentSeries +
            "\nНомер: " + this.documentNumber);
    };
    return OwnerClass;
}());
// Класс, реализующий интерфейс Транспортное средство
var VehicleImpl = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _getCarInfo_decorators;
    return _a = /** @class */ (function () {
            function VehicleImpl(brand, model, year, vin, registrationNumber, owner) {
                this.mark = __runInitializers(this, _instanceExtraInitializers);
                this.mark = brand;
                this.model = model;
                this.year = year;
                this.vin = vin;
                this.registrationNumber = registrationNumber;
                this.owner = owner;
            }
            Object.defineProperty(VehicleImpl.prototype, "Mark", {
                get: function () {
                    return this.mark;
                },
                set: function (value) {
                    this.mark = value;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(VehicleImpl.prototype, "Model", {
                get: function () {
                    return this.model;
                },
                set: function (value) {
                    this.model = value;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(VehicleImpl.prototype, "Year", {
                get: function () {
                    return this.year;
                },
                set: function (value) {
                    this.year = value;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(VehicleImpl.prototype, "Vin", {
                get: function () {
                    return this.vin;
                },
                set: function (value) {
                    this.vin = value;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(VehicleImpl.prototype, "RegistrationNumber", {
                get: function () {
                    return this.registrationNumber;
                },
                set: function (value) {
                    this.registrationNumber = value;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(VehicleImpl.prototype, "Owner", {
                get: function () {
                    return this.owner;
                },
                set: function (value) {
                    this.owner = value;
                },
                enumerable: false,
                configurable: true
            });
            VehicleImpl.prototype.printInfo = function () {
                console.log("Информация про Траснпортное средство: " +
                    " Марка: " + this.mark +
                    " Модель:  " + this.model +
                    " Год: " + this.year +
                    " VIN: " + this.vin +
                    " Регистрационный номер:" + this.registrationNumber);
            };
            VehicleImpl.prototype.getCarInfo = function () {
                return "\u041C\u0430\u0440\u043A\u0430: ".concat(this.mark, ", \u041C\u043E\u0434\u0435\u043B\u044C: ").concat(this.model);
            };
            return VehicleImpl;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _getCarInfo_decorators = [ToUpperCase];
            __esDecorate(_a, null, _getCarInfo_decorators, { kind: "method", name: "getCarInfo", static: false, private: false, access: { has: function (obj) { return "getCarInfo" in obj; }, get: function (obj) { return obj.getCarInfo; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var BodyType;
(function (BodyType) {
    BodyType["Sedan"] = "\u0421\u0435\u0434\u0430\u043D";
    BodyType["Coupe"] = "\u041A\u0443\u043F\u0435";
    BodyType["Hatchback"] = "\u0425\u044D\u0442\u0447\u0431\u044D\u043A";
})(BodyType || (BodyType = {}));
var CarClass;
(function (CarClass) {
    CarClass["Economy"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
    CarClass["Standard"] = "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442";
    CarClass["Luxury"] = "\u041B\u044E\u043A\u0441";
})(CarClass || (CarClass = {}));
var CarImpl = function () {
    var _classDecorators = [SealedClass];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = VehicleImpl;
    var CarImpl = _classThis = /** @class */ (function (_super) {
        __extends(CarImpl_1, _super);
        function CarImpl_1(brand, model, year, vin, registrationNumber, owner, bodyType, carClass) {
            var _this = _super.call(this, brand, model, year, vin, registrationNumber, owner) || this;
            _this.typeOfBody = bodyType;
            _this.classOfCar = carClass;
            return _this;
        }
        Object.defineProperty(CarImpl_1.prototype, "TypeOfBody", {
            get: function () {
                return this.typeOfBody;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarImpl_1.prototype, "ClassOfCar", {
            get: function () {
                return this.classOfCar;
            },
            enumerable: false,
            configurable: true
        });
        CarImpl_1.prototype.printInfo = function () {
            _super.prototype.printInfo.call(this);
            console.log("Тип кузова: " + this.TypeOfBody +
                "\nКласс Машины: " + this.ClassOfCar);
        };
        return CarImpl_1;
    }(_classSuper));
    __setFunctionName(_classThis, "CarImpl");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CarImpl = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CarImpl = _classThis;
}();
var owner1 = new OwnerClass("Капранов", "Василий", "Генадьевич", new Date(1990, 1, 1), TypeOfDocument.Passport, "1234", "567890");
var car1 = new CarImpl("Toyota", "Camry", 2020, "QWERTYU789632", "ABC123", owner1, BodyType.Sedan, CarClass.Luxury);
//Object.defineProperty("UV", "Color", { value: "Black"});
console.log(car1.getCarInfo());
