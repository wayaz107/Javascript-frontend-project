class Review{
    static allReviews = [];

    constructor({id, perfume_id, body}){
      this.id = id
      this.perfume = perfume_id
      this.body = body

      Review.allReviews.push(this)
    }
}