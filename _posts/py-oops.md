---
title: "OOPS in Python"
summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
date: "2024-03-12"
coverImage: "/assets/blog/python/python.png"
tags: ["python", "py notes", "notes"]
featured: true
author: "Paras Chandra"
---

## Classes and Objects
`self`: It is a keyword used to provide the context to the objects about the class and its attributes. 

`__init__()`: It is called the constructor. And it's called at the time of instantiation.

```py
class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
    
    def car_details(self):
        print(f'Brand: {self.brand}, Model: {self.model}')

my_car = Car('Toyota', 'Corolla')
print(my_car.brand) #Toyota
my_car.car_detail() #Brand: Toyota, Model: Corolla
```
## Inheritance
`super()`: It is used to refer to the methods and attributes of parent class inside a child class.

`isinstance()`: This method is used to check if an object is an instance of a class.

```py
class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
    
    def car_details(self):
        print(f'Brand: {self.brand}, Model: {self.model}')
    
class ElectricCar(Car):
    def __init__(self, brand, model, battery_size):
        super().__init__(brand, model)
        self.battery_size = battery_size
    
eCar = ElectricCar('Tesla', 'Model S', '85kWh')
eCar.car_details() #Brand: Tesla, Model: Model S

print(isinstance(eCar, ElectricCar)) #True
print(isinstance(eCar, Car)) #True
```
> Python supports multiple inheritance and the resolution is done from left to right.

## Encapsulation
This concept is used to wrap variables and methods to access it so that the attributes are not accessible directly but only through the methods.

`__variable`: This syntax is used to make the variables private. And these methods can only be accesses through getter methods.

```py
class Car:
    def __init__(self, brand, model):
        self.__brand = brand
        self.model = model
    
    def get_brand(self):
        return (f'Brand: {self.__brand}')

my_car = Car('Toyota', 'Corolla')
print(my_car.brand) # AttributeError: 'my_car' object has no attribute 'brand'
print(my_car.__brand) # AttributeError: 'my_car' object has no attribute '__brand'
print(my_car.get_brand()) #Brand: Toyota
```

## Polymorphism
When anything shows different behaviours corresponding to different env. or variables.
```py
class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
    
    def car_details(self):
        print(f'Brand: {self.brand}, Model: {self.model}')
    
class ElectricCar(Car):
    def __init__(self, brand, model, battery_size):
        super().__init__(brand, model)
        self.battery_size = battery_size
    
    #overriding
    def car_details(self):
        print(f'Brand: {self.brand}, Model: {self.model}, Battery: {self.battery_size}')

car = Car('Toyota', 'Corolla')
car.car_details() #Brand: Toyota, Model: Corolla
    
eCar = ElectricCar('Tesla', 'Model S', '85kWh')
eCar.car_details() #Brand: Tesla, Model: Model S, Battery: 85kWh
```

### Class variables:

```py
class Car:
    total = 0
    def __init__(self):
        Car.total+=1

Car()
print(Car.total) # 1
```

## Static Method
A method that belongs to a class rather than an instance of a class.

>`@staticmethod` decorator is used before class methods. Also no need to pass self parameter.

```py
class Car:
    def __init__(self, brand):
        self.brand = brand
    
    @staticmethod
    def car_data():
        print('Test')

my_car = Car('Test')
my_car.car_data() # inaccessible
Car.car_data() # Test
```

### Read-only variables
>@property decorator is used over the method with same name as variable.

```py
class Car:
    def __init__(self, brand):
        self.__brand = brand #first make the attribute private
    
    @property
    def brand(self):
        return self.__brand

my_car = Car('Test')
my_car.brand = 'Brand 1' # Error: can't override.
print(my_car.brand) # Test
```