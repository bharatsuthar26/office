let empdetails= {
    fname: 'Bharat',
    lname: 'Suthar',
    getFullName: function(){
        return this.fname+ ' ' +this.lname;
    }


}
let detailName= function(a,b){
    
    console.log(this.getFullName()+' Loves'+a+ 'and'+b)

}

let alldetails= detailName.call(empdetails);
alldetails(1,2);