// break & continue
let arr = ["A", "B", "C", "D", "E", "F"]
let counter = 0;
for(; counter < arr.length; counter++){
    if(counter==3){
        console.log("Counter is 3. Break.")
        break
        // console.log("Counter is 3. Continue.")
        // continue
    }
    console.log(arr[counter])
}
