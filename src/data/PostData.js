


class PostData {
    constructor(title, description, image, username, type, upVotes, date, comments, id){
        this.title = title;
        this.description = description;
        this.image = image;        
        this.user = username;
        this.type = type;

        this.upVotes = upVotes;
        this.date = date;
        this.comments = comments;
        this.id = id;
        console.log(this);        
    }   
}

export default PostData;