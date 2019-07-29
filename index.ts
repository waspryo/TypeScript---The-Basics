import * as _ from 'lodash'

async function hello() {
    return 'world'
}

//  .pickBy()

 let lucky: number = 23

interface Person {
    first: string;
    last: string;
    [key: string]: any
}

 const person: Person = {
     first: 'Usain',
     last: 'Bolt',
     fast: true
 }

 const person2: Person = {
     first: 'Jeff',
     last: 'Delaney'
 }


function pow(x: number, y:number):  string {
    return Math.pow(x, y).toString();
}

pow (5,19)

// Arrays

type Mylist = [number?, string?, boolean?]

const arr: Mylist = []

arr.push(1)
arr.push('23')
arr.push(false)

// Generics

class Observable<T> {
    constructor(public value: T) {}
}

let x: Observable<number>

let y: Observable<Person>

let z: Observable<23>