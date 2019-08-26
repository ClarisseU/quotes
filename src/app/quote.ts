export class Quote {
    showDescription: boolean;
    // public upvote: number;
    // public downvote: number;
    constructor(public quote: string, public name: string, public author: string,public completeDate: Date){
        this.showDescription = false;
        // this.upvote = 0;
        // this.downvote = 0;
    }
    
}
