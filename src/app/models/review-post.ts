export interface ReviewPost {
    title : string,
    author : string,
    date : string,
    address? : string,
    store? : string,
    description : string,
    upvotes: number,
    downvotes: number,
}