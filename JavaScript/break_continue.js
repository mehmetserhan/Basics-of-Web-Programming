// BREAK & CONTINUE
let arr = ["A", "B", "C", "D", "E", "F"]
let counter = 0;
for(; counter<arr.length; counter++){
    if(counter==3){
        console.log("Counter 3'e ulaştı. Döngüden çıkılıyor")
        break
        /*console.log("Counter 3. elementi (D) yazdırmayacak")
        continue*/
    }
    console.log(arr[counter])
}
