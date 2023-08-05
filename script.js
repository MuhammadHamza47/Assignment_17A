// // 13.1

// let greet = (fullName) => {
//     for (const i in fullName) {
//       console.log(fullName[i]);
//     }
//   };
//   let name = "Muhammad Hamza";
//   let secondFunc = (name, callback) => {
//     let spliting = name.split(" ");
//     callback(spliting);
//   };
//   console.log(secondFunc(name, greet));

// // 13.2

// let promise = new Promise((resolve, reject) => {
//     resolve("Start Counting");
//   });
//   function counter(value) {
//     console.log(value);
//   }
//   promise
//     .then((value) => {
//       counter(value);
//       return "One";
//     })
//     .then((value) => {
//       counter(value);
//       return "Two";
//     })
//     .then((value) => {
//       counter(value);
//       return "Three";
//     })
//     .then((value) => {
//       counter(value);
//     });

//     // 13.3  

//     let counter = 0;
// let myfunc = (a) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       counter++;
//       resolve(`a value ${a} counter:${counter}`);
//     }, 1000);
//   });
// };

// async function myFunc2(a) {
//   console.log(`ready ${a} counter:${counter}`);
//   let capture = await myfunc(a);
//   console.log(capture);
// }

// for (let i = 1; i <= 10; i++) {
//   myFunc2(i);
// }


// Password checker

let passwords = ["mhamza", "hafiz123", "clashking"];
let login = (pass) => {
  return passwords.includes(pass);
};
let returnPromise = (pass) => {
  return new Promise((resolve, reject) => {
    if (login(pass)) {
      resolve(true);
    } else {
      reject(false);
    }
  });
};

let checkingPass = (pass) => {
  returnPromise(pass)
    .then((value) => {
      console.log(value);
    })
    .catch((err) => {
      console.log(err);
    });
};

checkingPass("mhamza");
checkingPass("hafiz223");