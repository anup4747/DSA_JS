// checking of string anagram
function checkAnagram(a,b){
    let Obj1 = {}
    if (a.length === b.length){
        for (ch of a){
            Obj1[ch] = (Obj1[ch] || 0 ) + 1 
        }
        // console.log(Obj1)
        for (ch of b){
            if (!Obj1[ch]){
                // console.log(Obj1)
                return false
            }
            // console.log(Obj1)
            Obj1[ch]--;
            // console.log(Obj1)
        }
        return true;

    }else {
        return false
    }
   

}


console.log(checkAnagram("hello","ollee"))
