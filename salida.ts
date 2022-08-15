// asignando tipos

var myString = 'Hola!'
// TS INFIERE que el tipo de dato es un string
myString = 7 + 'hola'

var myNumber:number = 111
var myBoolean:boolean = true

var myVar:any = 'hello'
// any (generalmente) no es recomendable usarlo
myVar = undefined

// Arrays
var stringArray:string[] = ['a', '2', 'c', '4']
var numberArray:Array<number> = [4, 3, 2, 1]
var booleanArray:boolean[] = [true, false, false]
var anyArray:any[] = [null, '2', 0, [], {}, undefined]

// Tuple
var stringNumberTuple: [string, number]
stringNumberTuple = ['hi', 32]

// Void, undefined, null
// let myVoid:void = undefined
// let myNull:null = null
// let myUndefined:undefined = undefined

// Functions
var getSum = (a:number, b:number):number => {
    return a + b
}

var mySum = (a:string | number, b:number | string):number => {
    if (typeof(a) === 'string') {
        a = parseInt(a)
    }
    if (typeof(b) === 'string') {
        b = parseInt(b)
    }
    return a + b
}

var getName = (firstName:string, lastName?:string):string => {
    if (lastName === undefined) {
        return firstName
    }
    return `${firstName} ${lastName}`
}

var myFunctionVoid = ():void => {
    return
}

// CLASES

class User {
    protected name:string;
    lastname:string
    public email:string;
    private age:number;

    constructor(name:string, email:string, age:number) {
        this.name = name
        this.email = email
        this.age = age
    }

    register() {
        console.log(`${this.name} se ha registrado!`)
    }

    public ageInYears() {
        return this.age + ' years'
    }

    private getAge():number {
        return this.age
    }

    setAge(age:number) {
        return this.age = age
    }

    getName():string {
        return this.name
    }

    setName(name:string) {
        this.name = name
    }

}

var jhon = new User('Jhon', 'jhon@correo', 44)

// Inheritance

class Member extends User {
    // Propiedades de Member
    id:number
    constructor(id:number, name:string, email:string, age:number) {
        super(name, email, age)
        this.id = id
    }
    ageInYearsMember() {
        return super.ageInYears()
    }
}

var luis = new Member(1, 'Luis', 'luis@correo', 19)
// console.log(luis.ageInYearsMember())

// Array de objetos instanciados a partir de una clase
const personas:User[] = [jhon, luis]

// Clases con la misma estructura
class Auto1 {
    cantidadRuedas:number
    color:string
}

class Auto2 {
    cantidadRuedas:number
    color:string
}

let ford:Auto2 = new Auto1()
let fiat:Auto1 = new Auto2()
let auto:Auto1 = fiat





// INTERFACES

// Con type podemos crear nuestros propios tipos de datos.
// Aquí abajo un ejemplo:

// type ITodo = {
//     title: string,
//     text: string
// }

interface ITodo {
    title:string;
    text:string,
    year?:number
}

// UTILITY TYPES
var myTodo:Partial<ITodo> = {
    title: 'hola,',
    year: 2222
}
// No son requeridas todas las propiedades.
// Con Required<Type> son todas requeridas.
// Readonly<Type> sirve para que no se puedan modificar las propiedades.
// Y hay muchas más...

var showTodo = (todo:ITodo) => {
    return `${todo.title}, ${todo.text}`
}
console.log(showTodo({title:'hola', text:'que tal'}))

interface PersonaInterface {
    nombre:string
    edad:number
    altura?:number // propiedad opcional
}

interface AlumnoInterface extends PersonaInterface {
    cantidadCursosAprobados:number
}

var carlos:AlumnoInterface = {
    nombre: 'Carlos',
    edad: 22,
    cantidadCursosAprobados: 6,
}

// Interface como tipo de dato de una propiedad
interface Curso {
    nombre:string
    profesor:string
    duracion:number
}
interface Estudiante {
    universidad:string
    cursos:Curso[] // Array cuyos elementos tienen como tipo la interface Curso
}

// GENÉRICOS
var saludo = <w>(variable:w) => {
    return variable
}
console.log(saludo<string>('2223'))
// interface genérica
interface InterfaceGenerica<r> {
    saludo:r
}
var interfaceGenerica:InterfaceGenerica<string> = {saludo: 'hola!'}

// OPERADORES LÓGICOS
// |
interface AlimentosEnergíaPor100Gramos {
    manzana:number
    lentejas:number
}
interface Ejercicios {
    pesoMuerto:string
    sentadillasSeries:number
}
const cosas:AlimentosEnergíaPor100Gramos | Ejercicios = {
    // el tipo tiene que ser: Alimentos, Ejercicios o ambos.
    pesoMuerto: 'es un ejercicio de piernas',
    sentadillasSeries: 6,
    manzana: 52,
    lentejas: 116,
}
// &
interface Frutas {
    fruta1:string
    fruta2:string
}
interface Verduras {
    verdura1:string
    verdura2:string
}
const alimentos:Verduras & Frutas = {
    fruta1: 'naranja',
    verdura1: 'espinacas',
    verdura2: 'zanahoria',
    fruta2: 'banana'
}
