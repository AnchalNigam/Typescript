// defining a class
var SocialProfile = /** @class */ (function () {
    //constructor for initializing my class fields with optional parameter as well
    function SocialProfile(name, email, birthday, age, gender, work, mobileNumber, relationshipStatus, hometown, currentCity, school, about, quote) {
        var _this = this;
        // methods as i have set private so to access them these are methods with 'return' data type as well
        this.getName = function () {
            return _this.name;
        };
        this.getEmail = function () {
            return _this.email;
        };
        this.getBirthday = function () {
            return _this.birthday;
        };
        this.getAge = function () {
            return _this.age;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.getWork = function () {
            return _this.work;
        };
        this.getMobile = function () {
            return _this.mobileNumber;
        };
        this.getRelationStat = function () {
            if (_this.relationshipStatus != undefined) {
                return _this.relationshipStatus;
            }
            else {
                return "Not Shared";
            }
        };
        this.getHomeTown = function () {
            if (_this.hometown != undefined) {
                return _this.hometown;
            }
            else {
                return "Not Shared";
            }
        };
        this.getCurrentCity = function () {
            if (_this.currentCity != undefined) {
                return _this.currentCity;
            }
            else {
                return "Not Shared";
            }
        };
        this.getSchool = function () {
            if (_this.school != undefined) {
                return _this.school;
            }
            else {
                return "Not Shared";
            }
        };
        this.getAbout = function () {
            if (_this.about != undefined) {
                return _this.about;
            }
            else {
                return "Not Shared";
            }
        };
        this.getQuote = function () {
            if (_this.quote != undefined) {
                return _this.quote;
            }
            else {
                return "Not Shared";
            }
        };
        //end get methods
        //methods for modifying the fields using setter
        this.setName = function (name) {
            _this.name = name;
        };
        this.setEmail = function (email) {
            _this.email = email;
        };
        this.setGender = function (gender) {
            _this.gender = gender;
        };
        this.setBirthday = function (birth) {
            _this.birthday = birth;
        };
        this.setMobile = function (number) {
            _this.mobileNumber = number;
        };
        this.setAge = function (age) {
            _this.age = age;
        };
        this.setWork = function (work) {
            _this.work = work;
        };
        this.setRelationstat = function (relation) {
            _this.relationshipStatus = relation;
        };
        this.setHomeTown = function (home) {
            _this.hometown = home;
        };
        this.setCurrentCity = function (city) {
            _this.currentCity = city;
        };
        this.setSchool = function (school) {
            _this.school = school;
        };
        this.setAbout = function (about) {
            _this.about = about;
        };
        this.setQuote = function (quote) {
            _this.quote = quote;
        };
        this.name = name;
        this.email = email;
        this.birthday = birthday;
        this.age = age;
        this.gender = gender;
        this.work = work;
        this.mobileNumber = mobileNumber;
        this.relationshipStatus = relationshipStatus;
        this.hometown = hometown;
        this.currentCity = currentCity;
        this.school = school;
        this.about = about;
        this.quote = quote;
    } // end constructor
    return SocialProfile;
}()); // end class 
var facebookInfo = new SocialProfile("Anchal", "anchal@gmail.com", "20 june,2018", 22, "female", "study", 9026224948, "single", "Allahabad"); //object creation(instantiation) and use of template literal
console.log("\nFacebook profile information");
console.log("Name: " + facebookInfo.getName());
console.log("Email: " + facebookInfo.getEmail()); //use of template literal
console.log("Birthday: " + facebookInfo.getBirthday());
console.log("Gender: " + facebookInfo.getGender());
console.log("Age: " + facebookInfo.getAge());
console.log("Work: " + facebookInfo.getWork());
console.log("Mobile Number: " + facebookInfo.getMobile());
console.log("Relaationship status: " + facebookInfo.getRelationStat());
console.log("Home Town: " + facebookInfo.getHomeTown());
console.log("Current City: " + facebookInfo.getCurrentCity());
console.log("School: " + facebookInfo.getSchool());
console.log("About: " + facebookInfo.getAbout());
console.log("Quote: " + facebookInfo.getQuote());
//set the properties 
facebookInfo.setName("Adi");
facebookInfo.setEmail("ancha@gmail.com");
facebookInfo.setGender("Male");
facebookInfo.setBirthday('26 March,2018');
facebookInfo.setAge(23);
facebookInfo.setWork("web developer");
facebookInfo.setMobile(9026224947);
facebookInfo.setRelationstat("Single");
facebookInfo.setHomeTown("allahabad");
facebookInfo.setCurrentCity("allahabad");
facebookInfo.setSchool('allahabad public school');
facebookInfo.setAbout('HARDWORKING');
facebookInfo.setQuote('ONLY HAPPY');
console.log("\nNew Facebook profile information");
console.log("Name: " + facebookInfo.getName());
console.log("Email: " + facebookInfo.getEmail()); //use of template literal
console.log("Birthday: " + facebookInfo.getBirthday());
console.log("Gender: " + facebookInfo.getGender());
console.log("Age: " + facebookInfo.getAge());
console.log("Work: " + facebookInfo.getWork());
console.log("Mobile Number: " + facebookInfo.getMobile());
console.log("Relaationship status: " + facebookInfo.getRelationStat());
console.log("Home Town: " + facebookInfo.getHomeTown());
console.log("Current City: " + facebookInfo.getCurrentCity());
console.log("School: " + facebookInfo.getSchool());
console.log("About: " + facebookInfo.getAbout());
console.log("Quote: " + facebookInfo.getQuote());
