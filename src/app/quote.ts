export class Quote {
    showDescription: boolean;
    constructor(public quote: string, public name: string, public author: string){
        this.showDescription = false;
    }
    
}
