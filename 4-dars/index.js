// let yosh = 60;

// if (yosh >= 3 && yosh <= 6) {
//   console.log("Siz bog`chaga borasiz");
// } else if (yosh >= 7 && yosh <= 17) {
//   console.log("Siz maktabga borasiz");
// } else if (yosh >= 18 && yosh <= 30) {
//   console.log("Siz Universitetga borasiz");
// } else if (yosh >= 31 && yosh <= 59) {
//   console.log("Siz ishda ishlaysiz");
// } else if (yosh >= 60) {
//   console.log("Siz nafaqadasiz");
// } else {
//   console.log("Siz notog`ri kiritdongiz");
// }

// let name = "RU";
// switch (name) {
//   case "USA":
//     console.log("Amerika qo`shma shatatlari");
//     break;
//   case "RU":
//     console.log("Russia Federatsiyasi");
//     break;

//   case "UK":
//     console.log(" Germaniya");
//     break;
//   case "UZB":
//     console.log("O`zbekiston");
//     break;
//   default:
//     console.log("Siz notog`ri qiymat kiritdingiz.");
// }

let yosh=22;
yosh >= 1 &&  yosh <= 2 ? console.log("Chaqaloq") :
yosh >=60 ? console.log("Nafaqa"): console.log("Siz xato Yosh kiritdingiz"):
yosh >=7 && yosh<=17 ? console.log("Maktab"): yosh >=18&& yosh <=30 ? console.log("Universutet"): yosh >=31 && yosh<= 59 ? console.log("Ishchi"):



// let soat = 9;

// if (soat >= 5 && soat < 8) {
//     console.log("Ertalabki badantarbiya va nonushta qilasiz");
// }
// else if (soat >= 8 && soat < 12) {
//     console.log("O`qishga borasiz");
// }
// else if (soat >= 12 && soat < 13) {
//     console.log("Tushlik qilasiz");
// }
// else if (soat >= 13 && soat < 18) {
//     console.log("Ish yoki o'qishni davom ettirasiz");
// }
// else if (soat >= 18 && soat < 22) {
//     console.log("Uyga vazifa qilasiz");
// }
// else if (soat >= 22 && soat <= 24) {
//     console.log("Uyquga yotasiz");
// }
// else {
//     console.log("Noto'g'ri vaqt kiritdingiz");
// }


// let ball = 85;

// if (ball >= 90 && ball <= 100) {
//     console.log("A'lo baho");
// }
// else if (ball >= 70 && ball < 90) {
//     console.log("Yaxshi baho");
// }
// else if (ball >= 60 && ball < 70) {
//     console.log("Qoniqarli");
// }
// else if (ball >= 0 && ball < 60) {
//     console.log("Yiqildingiz");
// }
// else {
//     console.log("Noto'g'ri ball kiritildi");
// }


// let xarid = 250000;

// if (xarid >= 500000) {
//     console.log("20% chegirma beriladi");
// }
// else if (xarid >= 300000) {
//     console.log("10% chegirma beriladi");
// }
// else if (xarid > 0) {
//     console.log("Chegirma mavjud emas");
// }
// else {
//     console.log("Noto'g'ri summa kiritildi");
// }


// let tezlik = 110;

// if (tezlik <= 70) {
//     console.log("Tezlik meyorida");
// }
// else if (tezlik > 70 && tezlik <= 100) {
//     console.log("Ogohlantirish beriladi");
// }
// else {
//     console.log("Jarima to'laysiz");
// }


// let batareya = 15;

// if (batareya >= 80) {
//     console.log("Quvvat to'liq");
// }
// else if (batareya >= 30 && batareya < 80) {
//     console.log("Quvvat o'rtacha");
// }
// else if (batareya > 0 && batareya < 30) {
//     console.log("Zaryad kam, quvvatlang");
// }
// else {
//     console.log("Telefon o'chgan");
// }




let soat = 10;

switch (soat) {
    case (soat >= 5 && soat < 8):
        console.log("Ertalabki badantarbiya va nonushta qilasiz");
        break;

    case (soat >= 8 && soat < 12):
        console.log("O'qishga borasiz");
        break;

    case (soat >= 12 && soat < 13):
        console.log("Tushlik qilasiz");
        break;

    case (soat >= 13 && soat < 18):
        console.log("Ish yoki o'qishni davom ettirasiz");
        break;

    case (soat >= 18 && soat < 22):
        console.log("Uyga vazifa qilasiz");
        break;

    case (soat >= 22 && soat <= 24):
        console.log("Uyquga yotasiz");
        break;

    default:
        console.log("Noto'g'ri vaqt kiritdingiz");
}


let ball = 50;

switch (ball) {
    case (ball >= 90 && ball <= 100):
        console.log("A'lo baho");
        break;

    case (ball >= 70 && ball < 90):
        console.log("Yaxshi baho");
        break;

    case (ball >= 60 && ball < 70):
        console.log("Qoniqarli");
        break;

    case (ball >= 0 && ball < 60):
        console.log("Yiqildingiz");
        break;

    default:
        console.log("Noto'g'ri ball kiritildi");
}
    

let xarid = 400;

switch (xarid) {
    case (xarid >= 500):
        console.log("20% chegirma beriladi");
        break;

    case (xarid >= 300):
        console.log("10% chegirma beriladi");
        break;

    case (xarid > 0):
        console.log("Chegirma mavjud emas");
        break;

    default:
        console.log("Noto'g'ri summa kiritildi");
}

let tezlik = 70;

switch (true) {
    case (tezlik <= 70):
        console.log("Tezlik meyorida");
        break;

    case (tezlik > 70 && tezlik <= 100):
        console.log("Ogohlantirish beriladi");
        break;

    default:
        console.log("Jarima to'laysiz");
}


let batareya = 20;

switch (batareya) {
    case (batareya >= 80):
        console.log("Quvvat to'liq");
        break;

    case (batareya >= 30 && batareya < 80):
        console.log("Quvvat o'rtacha");
        break;

    case (batareya > 0 && batareya < 30):
        console.log("Zaryad kam, quvvatlang");
        break;

    default:
        console.log("Telefon o'chgan");
}
