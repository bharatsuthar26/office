let empdetails= {
    fname: 'Bharat',
    lname: 'Suthar',
    getFullName: function(){
        return this.fname+ ' ' +this.lname;
    }


}
let detailName= function(){
    
    console.log(this.getFullName()+' I choose you!')

}

let alldetails= detailName.bind(empdetails);
alldetails();