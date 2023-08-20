var singleNumber = function(nums) {

    let ht = {};
    // populate the hash table and count
    for(num of nums){
        if(ht[num] == null){
        ht[num] = 1;
        }else{
            ht[num] += 1
        }
    }
    // console.log(ht)

    for(let key in ht){
        if(ht[key]===1){
            return key
        }
    }
};
