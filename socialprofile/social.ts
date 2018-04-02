// defining a class
class SocialProfile{
    //fields
    private name:string;
    private email: string;
    private birthday :string;
    private age:number;
    private gender : string;
    private hometown :string;
    private currentCity : string;
    private school:string;
    private work: string;
    private relationshipStatus: string;
    private mobileNumber:number;
    private about:string;
    private quote:string;
     //constructor for initializing my class fields with optional parameter as well
    constructor (name:string,email:string,birthday:string,age:number,gender:string,work:string,mobileNumber:number,
                relationshipStatus?:any,hometown?:any,currentCity?:any,
                 school?:any,about?:any,quote?:any){
        this.name=name;
        this.email=email;
        this.birthday=birthday;
        this.age=age;
        this.gender=gender;
        this.work=work;
        this.mobileNumber=mobileNumber;
        this.relationshipStatus=relationshipStatus;
        this.hometown=hometown;
        this.currentCity=currentCity;
        this.school=school;
        this.about=about;
        this.quote=quote;
       
 
 
     }// end constructor
     
     // methods as i have set private so to access them these are methods with 'return' data type as well
     getName= ():string=>{
         return this.name;
     }
     getEmail= ():string=>{
         return this.email;
     }
     getBirthday= ():string=>{
         return this.birthday;
     }
     getAge= ():number=>{
        return this.age;
    }
     getGender= ():string=>{
         return this.gender;
     }
     getWork= ():string=>{
         return this.work;
     }
     getMobile= ():number=>{
         return this.mobileNumber;
     }
     getRelationStat= ():string=>{
        if(this.relationshipStatus!=undefined){
            return this.relationshipStatus;          
         }
         else{
             return `Not Shared`;
         }
        
     }
     getHomeTown= ():string=>{
        if(this.hometown!=undefined){
            return this.hometown;          
         }
         else{
             return `Not Shared`;
         }
     }
     getCurrentCity= ():string=>{
        if(this.currentCity!=undefined){
            return this.currentCity;          
         }
         else{
             return `Not Shared`;
         }
        
     }
     getSchool= ():string=>{
         if(this.school!=undefined){
            return this.school;          
         }
         else{
             return `Not Shared`;
         }
     }
     getAbout= ():string=>{
        if(this.about!=undefined){
           return this.about;          
        }
        else{
            return `Not Shared`;
        }
    }
    getQuote= ():string=>{
        if(this.quote!=undefined){
           return this.quote;          
        }
        else{
            return `Not Shared`;
        }
    }
     //end get methods
 
     //methods for modifying the fields using setter
      
     setName=(name:string) =>{
          this.name=name;
     }
     setEmail=(email:string) =>{
         this.email=email;
     }
     setGender=(gender:string) =>{
          this.gender=gender;
     }
     setBirthday=(birth:string) =>{
          this.birthday=birth;
     }
     setMobile=(number:number)=>{
          this.mobileNumber=number;
     }
     setAge=(age:number)=>{
        this.age=age;
     }
     setWork=(work:string)=>{
        this.work=work;
     }
     setRelationstat=(relation:string)=>{
        this.relationshipStatus=relation;
     }
     setHomeTown=(home:string)=>{
        this.hometown=home;
     }
     setCurrentCity=(city:string)=>{
        this.currentCity=city;
     }
     setSchool=(school:string)=>{
        this.school=school;
     }
     setAbout=(about:string)=>{
        this.about=about;
     }
     setQuote=(quote:string)=>{
        this.quote=quote;
     }
    //end of setters
      
     
     
     }// end class 

     let facebookInfo=new SocialProfile(`Anchal`,`anchal@gmail.com`,`20 june,2018`,22,`female`,`study`,9026224948,
                                         `single`,`Allahabad`); //object creation(instantiation) and use of template literal

    console.log (`\nFacebook profile information`);
    console.log(`Name: ${facebookInfo.getName()}`);
    console.log(`Email: ${facebookInfo.getEmail()}`); //use of template literal
    console.log(`Birthday: ${facebookInfo.getBirthday()}`);
    console.log(`Gender: ${facebookInfo.getGender()}`);
    console.log(`Age: ${facebookInfo.getAge()}`);
    console.log(`Work: ${facebookInfo.getWork()}`);
    console.log(`Mobile Number: ${facebookInfo.getMobile()}`);
    console.log(`Relaationship status: ${facebookInfo.getRelationStat()}`);
    console.log(`Home Town: ${facebookInfo.getHomeTown()}`);
    console.log(`Current City: ${facebookInfo.getCurrentCity()}`);
    console.log(`School: ${facebookInfo.getSchool()}`);
    console.log(`About: ${facebookInfo.getAbout()}`);
    console.log(`Quote: ${facebookInfo.getQuote()}`);

    //set the properties 
    facebookInfo.setName(`Adi`);
    facebookInfo.setEmail(`ancha@gmail.com`);
    facebookInfo.setGender(`Male`);
    facebookInfo.setBirthday('26 March,2018');
    facebookInfo.setAge(23);
    facebookInfo.setWork(`web developer`);
    facebookInfo.setMobile(9026224947);
    facebookInfo.setRelationstat(`Single`);
    facebookInfo.setHomeTown(`allahabad`);
    facebookInfo.setCurrentCity(`allahabad`);
    facebookInfo.setSchool('allahabad public school');
    facebookInfo.setAbout('HARDWORKING');
    facebookInfo.setQuote('ONLY HAPPY');
     
    console.log (`\nNew Facebook profile information`);
    console.log(`Name: ${facebookInfo.getName()}`);
    console.log(`Email: ${facebookInfo.getEmail()}`); //use of template literal
    console.log(`Birthday: ${facebookInfo.getBirthday()}`);
    console.log(`Gender: ${facebookInfo.getGender()}`);
    console.log(`Age: ${facebookInfo.getAge()}`);
    console.log(`Work: ${facebookInfo.getWork()}`);
    console.log(`Mobile Number: ${facebookInfo.getMobile()}`);
    console.log(`Relaationship status: ${facebookInfo.getRelationStat()}`);
    console.log(`Home Town: ${facebookInfo.getHomeTown()}`);
    console.log(`Current City: ${facebookInfo.getCurrentCity()}`);
    console.log(`School: ${facebookInfo.getSchool()}`);
    console.log(`About: ${facebookInfo.getAbout()}`);
    console.log(`Quote: ${facebookInfo.getQuote()}`);