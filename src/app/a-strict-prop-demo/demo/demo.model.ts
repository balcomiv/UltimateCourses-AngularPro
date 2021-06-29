export class User {
    firstName: string;   //  Didn't explicitly initialize default here

    address: {
        street: string;
    };

    constructor() {
        //  Didn't explicitly initialize properties here
    }
}

//  Note: Editor shows my property as T, when in fact, it it T | undefined.
//        This is the kind of runtime issue that makes it to customers...

const user = new User();

const firstName: string = user.firstName;

console.log('Typed as string, but... ', firstName);

//  Becomes and even bigger issue for nested objects
console.log('NOPE !!!', user.address.street);
