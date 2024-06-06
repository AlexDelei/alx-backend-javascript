interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teach: Teacher  = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'london',
    contract: false,
}

// console.log(teach)

// Extends functoinality
interface Directors extends Teacher {
    numberOfReports: number;
}

const director: Directors = {
    firstName: 'Alex',
    lastName: 'Delei',
    fullTimeEmployee: true,
    contract: true,
    location: 'Hungaray',
    numberOfReports: 12,
}

console.log(director)