function getUser(userId,callback){
    console.log("Get user from the database");
    setTimeout(()=>{
        callback({userId:userId , userName:'Bharat'})
    },2000)
}
function getServices(user,callback){
    console.log(`Get Services of ${user.userName}`);
    setTimeout(()=>{
        callback(['a','b','c','d'])
    },3000)

}
function getServiceCost(services,callback){
    console.log(`Calculate service costs of ${services}`);
    setTimeout(()=>{
        callback(services.length*500)
    },3000)
}

getUser(101,(user)=>{
    getServices(user,(services)=>{
        getServiceCost(services,(cost)=>{
            console.log(`THe sewrvices cost is ${cost}`)
        })
    })
})