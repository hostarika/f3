

let a = +prompt(`Birinchi son kiriting`)

let b = +prompt(`Ikkinchi son kiriting`)

let amal = +prompt(`Amalni tanlang:
1.qo'shish
2.ayirish
3.ko'paytirish
4.bo'lish
5.Qoldiqli bo'lish.
amalni tanlang:(1/2/3/4/5):`)

if(amal==1){
alert(a+b)
}
else if(amal==2){
alert(a-b)
}
else if(amal==3){
alert(a*b)
}
else if(amal==4){
alert(a/b)
}
else if(amal==5){
alert(a%b)
}
else{
alert(`1 dan 4 ga cha son kiriting!`)
}
console.log(a)
console.log(b)
console.log(amal)