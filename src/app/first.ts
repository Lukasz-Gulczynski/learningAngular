// class MyClass 
// {
//     private _name: any;
//     private _lastName: any;

//     constructor (name: any, lastName: any)
//     {
//         this._name = name;
//         this._lastName = lastName;
//     }
// }

// let a = new MyClass('aaa', 20);

// class Person1 
// {
//     // private _name: string;
//     // private _lastName: string;
//     // private _age: number

//     constructor (private name: string, private lastName: string, age: number)
//     {
//         // this._name = name;
//         // this._lastName = lastName;
//         // this._age = age;
//     }

//     public method(isSomething: boolean): boolean
//     {
//         return isSomething;
//     }
// }

// class Manager extends Person
// {
//     // private _salary: number;

//     constructor (name: any, lastName: any, age: number, private salary: number)
//     {
//         super(name, lastName, age)
//         // this._salary = salary;
//     }
// }

// class Boss extends Manager
// {
//     private _department: string;

//     constructor (name: any, lastName: any, age: number, salary: number, department: string)
//     {
//         super(name, lastName, age, salary)
//         this._department = department;
//     }
// }

// interface IPerson {
//     changeName(name: string): void;
// }



// //JS
// // function MyClass(name, lastName)
// // {
// //     this.name = name;
// //     this.lastName = lastName;
// // }




// //C#
// // class MyClass 
// // {
// //     private string _name;
// //     private string _lastName;

// //     public MyClass(string name, string lastName)
// //     {
// //         this._name = name;
// //         this._lastName = lastName;
// //     }
// // }