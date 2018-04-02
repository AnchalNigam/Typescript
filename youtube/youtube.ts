// defining a class
class YouTubeVideo {
   //fields
   private title:string;
   private numberOfViews: number;
   private numberOfLikes :number;
   private numberOfDislikes : number;
   private numberOfSubscriber :number;
   private numberOfComments : number;
   private videoUrl:string;
   private postedBy: string;
   private postedOn: string;
   private description:string;
    //constructor for initializing my class fields with optional parameter as well
   constructor (title:string,numberOfViews:number,numberOfLikes:number,numberOfDislikes:number,numberOfSubscriber:number,
                 numberOfComments:number,videoUrl:string,postedBy:string,postedOn:string,description?:any){
       this.title= title;
       this.numberOfViews = numberOfViews;
       this.numberOfLikes = numberOfLikes;
       this.numberOfDislikes = numberOfDislikes;
       this.numberOfSubscriber = numberOfSubscriber;
       this.numberOfComments= numberOfComments;
       this.videoUrl= videoUrl;
       this.postedBy=  postedBy;
       this.postedOn= postedOn;
       this.description= description;


    }// end constructor
    
    // methods as i have set private so to access them these are methods with 'return' data type as well
    getTitle= ():string=>{
        return this.title;
    }
    getNumberOfLikes= ():number=>{
        return this.numberOfLikes;
    }
    getNumberOfDislikes= ():number=>{
        return this.numberOfDislikes;
    }
    getNumberOfComments= ():number=>{
        return this.numberOfComments;
    }
    getNumberOfSubscriber= ():number=>{
        return this.numberOfSubscriber;
    }
    getNumberOfViews= ():number=>{
        return this.numberOfViews;
    }
    getVideoUrl= ():string=>{
        return this.videoUrl;
    }
    getPostedBy= ():string=>{
        return this.postedBy;
    }
    getPostedOn= ():string=>{
        return this.postedOn;
    }
    getDescription= ():string=>{
        if(this.description!=undefined){
           return this.description;          
        }
        else{
            return `No description`;
        }
    }
    //end get methods

    //methods for modifying the fields using setter
     CountLikes=()=> {                         //this is like when user clicks on
                                                        //like button then it increments so basically its like setting the property so i made it this
          this.numberOfLikes++;
     }
     CountDislikes=()=> {
         this.numberOfDislikes++;
    }
    CountViews=() => {
        this.numberOfViews++;
    }
    CountSubscriber=() => {
        this.numberOfSubscriber++;
    }
    CountComments=()=> {
         this.numberOfComments++;
    }
    setTitle=(title:string) =>{
         this.title=title;
    }
    setDescription=(desc:string) =>{
        this.description=desc;
    }
    setPostedOn=(postOn:string) =>{
         this.postedOn=postOn;
    }
    setPostedBy=(postBy:string) =>{
         this.postedBy=postBy;
    }
    setUrl=(url:string)=>{
         this.videoUrl=url;
    }
     //getting all comments,related videos and recomended videos
    getAllComments=()=>{
        return `List of all comments`;
    }
    getRelatedVideos=():string => {
        return `Fantastic videos for you!`;
    }
    getRecommendedVideos= ():string =>{
        return `Recommended videos for you!`;
    }
    
    
    }// end class 
    
    
    let youTubeInfo=new YouTubeVideo(`Learn Typescript`,1000,990,10,500,100,`https://www.youtube.com/watch?1`,
                               `Anchal`,`20th March,2018`,`nice`); //object creation(instantiation) and use of template literal
    console.log (`\nVideo information`);
    console.log(`Video Title: ${youTubeInfo.getTitle()}`);
    console.log(`Number Of views: ${youTubeInfo.getNumberOfViews()}`); //use of template literal
    console.log(`Number of likes: ${youTubeInfo.getNumberOfLikes()}`);
    console.log(`Number of Dislikes: ${youTubeInfo.getNumberOfDislikes()}`);
    console.log(`Posted By: ${youTubeInfo.getPostedBy()}`);
    console.log(`Posted on: ${youTubeInfo.getPostedOn()}`);
    console.log(`Video Description: ${youTubeInfo.getDescription()}`);
    console.log(`Number Of comments: ${youTubeInfo.getNumberOfComments()}`);
    console.log(`All comments List: ${youTubeInfo.getAllComments()}`);
    console.log(`All related Videos: ${youTubeInfo.getRelatedVideos()}`);
    console.log(`All recommended Videos: ${youTubeInfo.getRecommendedVideos()}`);
    
    //set the properties 
    youTubeInfo.setTitle(`Typescript Introduction`);
    youTubeInfo.setPostedBy(`Sunita Nigam`);
    youTubeInfo.setPostedOn(`30 March,2018`);
    youTubeInfo.setUrl(`https://www.youtube.com/watch?2`);
    youTubeInfo.setDescription(`Learn it`);
    youTubeInfo.CountLikes();
    youTubeInfo.CountDislikes();
    youTubeInfo.CountViews();
    youTubeInfo.CountSubscriber();
    youTubeInfo.CountComments();
     
    console.log(`\nNew Video Information`);
    console.log(`Video Title: ${youTubeInfo.getTitle()}`);
    console.log(`Number Of views: ${youTubeInfo.getNumberOfViews()}`); //use of template literal
    console.log(`Number of likes: ${youTubeInfo.getNumberOfLikes()}`);
    console.log(`Number of Dislikes: ${youTubeInfo.getNumberOfDislikes()}`);
    console.log(`Posted By: ${youTubeInfo.getPostedBy()}`);
    console.log(`Posted on: ${youTubeInfo.getPostedOn()}`);
    console.log(`Video Description: ${youTubeInfo.getDescription()}`);
    console.log(`Number Of comments: ${youTubeInfo.getNumberOfComments()}`);
   
    