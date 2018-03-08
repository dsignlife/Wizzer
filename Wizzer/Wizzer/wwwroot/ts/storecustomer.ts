class StoreCustomer
{
    private lastName: string;
    private firstName: string;
    public visits: number = 0;
    private ourName: string;


    constructor(firstName:string, lastName:string) {
        this.lastName = lastName;
        this.firstName = firstName;
    }

    showName(): boolean {
        alert("Welcome " + this.firstName + " "+this.lastName);
        return true;
    }


    set name(val) {
        this.ourName = val;
    }

    get name() {
        return this.ourName;
    }
}