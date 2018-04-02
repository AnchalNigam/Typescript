// defining a class
var YouTubeVideo = /** @class */ (function () {
    //constructor for initializing my class fields with optional parameter as well
    function YouTubeVideo(title, numberOfViews, numberOfLikes, numberOfDislikes, numberOfSubscriber, numberOfComments, videoUrl, postedBy, postedOn, description) {
        var _this = this;
        // methods as i have set private so to access them these are methods with 'return' data type as well
        this.getTitle = function () {
            return _this.title;
        };
        this.getNumberOfLikes = function () {
            return _this.numberOfLikes;
        };
        this.getNumberOfDislikes = function () {
            return _this.numberOfDislikes;
        };
        this.getNumberOfComments = function () {
            return _this.numberOfComments;
        };
        this.getNumberOfSubscriber = function () {
            return _this.numberOfSubscriber;
        };
        this.getNumberOfViews = function () {
            return _this.numberOfViews;
        };
        this.getVideoUrl = function () {
            return _this.videoUrl;
        };
        this.getPostedBy = function () {
            return _this.postedBy;
        };
        this.getPostedOn = function () {
            return _this.postedOn;
        };
        this.getDescription = function () {
            if (_this.description != undefined) {
                return _this.description;
            }
            else {
                return "No description";
            }
        };
        //end get methods
        //methods for modifying the fields using setter
        this.CountLikes = function () {
            //like button then it increments so basically its like setting the property so i made it this
            _this.numberOfLikes++;
        };
        this.CountDislikes = function () {
            _this.numberOfDislikes++;
        };
        this.CountViews = function () {
            _this.numberOfViews++;
        };
        this.CountSubscriber = function () {
            _this.numberOfSubscriber++;
        };
        this.CountComments = function () {
            _this.numberOfComments++;
        };
        this.setTitle = function (title) {
            _this.title = title;
        };
        this.setDescription = function (desc) {
            _this.description = desc;
        };
        this.setPostedOn = function (postOn) {
            _this.postedOn = postOn;
        };
        this.setPostedBy = function (postBy) {
            _this.postedBy = postBy;
        };
        this.setUrl = function (url) {
            _this.videoUrl = url;
        };
        //getting all comments,related videos and recomended videos
        this.getAllComments = function () {
            return "List of all comments";
        };
        this.getRelatedVideos = function () {
            return "Fantastic videos for you!";
        };
        this.getRecommendedVideos = function () {
            return "Recommended videos for you!";
        };
        this.title = title;
        this.numberOfViews = numberOfViews;
        this.numberOfLikes = numberOfLikes;
        this.numberOfDislikes = numberOfDislikes;
        this.numberOfSubscriber = numberOfSubscriber;
        this.numberOfComments = numberOfComments;
        this.videoUrl = videoUrl;
        this.postedBy = postedBy;
        this.postedOn = postedOn;
        this.description = description;
    } // end constructor
    return YouTubeVideo;
}()); // end class 
var youTubeInfo = new YouTubeVideo("Learn Typescript", 1000, 990, 10, 500, 100, "https://www.youtube.com/watch?1", "Anchal", "20th March,2018", "nice"); //object creation(instantiation) and use of template literal
console.log("\nVideo information");
console.log("Video Title: " + youTubeInfo.getTitle());
console.log("Number Of views: " + youTubeInfo.getNumberOfViews()); //use of template literal
console.log("Number of likes: " + youTubeInfo.getNumberOfLikes());
console.log("Number of Dislikes: " + youTubeInfo.getNumberOfDislikes());
console.log("Posted By: " + youTubeInfo.getPostedBy());
console.log("Posted on: " + youTubeInfo.getPostedOn());
console.log("Video Description: " + youTubeInfo.getDescription());
console.log("Number Of comments: " + youTubeInfo.getNumberOfComments());
console.log("All comments List: " + youTubeInfo.getAllComments());
console.log("All related Videos: " + youTubeInfo.getRelatedVideos());
console.log("All recommended Videos: " + youTubeInfo.getRecommendedVideos());
//set the properties 
youTubeInfo.setTitle("Typescript Introduction");
youTubeInfo.setPostedBy("Sunita Nigam");
youTubeInfo.setPostedOn("30 March,2018");
youTubeInfo.setUrl("https://www.youtube.com/watch?2");
youTubeInfo.setDescription("Learn it");
youTubeInfo.CountLikes();
youTubeInfo.CountDislikes();
youTubeInfo.CountViews();
youTubeInfo.CountSubscriber();
youTubeInfo.CountComments();
console.log("\nNew Video Information");
console.log("Video Title: " + youTubeInfo.getTitle());
console.log("Number Of views: " + youTubeInfo.getNumberOfViews()); //use of template literal
console.log("Number of likes: " + youTubeInfo.getNumberOfLikes());
console.log("Number of Dislikes: " + youTubeInfo.getNumberOfDislikes());
console.log("Posted By: " + youTubeInfo.getPostedBy());
console.log("Posted on: " + youTubeInfo.getPostedOn());
console.log("Video Description: " + youTubeInfo.getDescription());
console.log("Number Of comments: " + youTubeInfo.getNumberOfComments());
