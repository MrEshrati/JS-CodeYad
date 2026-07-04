// First Example

// var HasMeeting = true;
// const meeting = new Promise((resolve, reject) => {
//   if (HasMeeting) {
//     const meetingInfo = {
//       Host: "Codeyad",
//       Locatoin: "Tehrean",
//       Time: "10:00 AM",
//     };
//     resolve(meetingInfo);
//   } else {
//     reject(new Error("There's no Meeting!"));
//   }
// });

// const setCalendar = (meetingInf) => {

//     const meetingCalendar = `Meeting is scheduled by ${meetingInf.Host} at ${meetingInf.Locatoin} on ${meetingInf.Time}`;
//     return Promise.resolve(meetingCalendar);
// };

// meeting.then(setCalendar).then((res) => console.log(res)).catch((e) => console.log(e));

// ----------------------------------------------------------

// Second Example (When you use Promise.all it will wait for all selected promises to send their resolves and then does the .then() )

// const Promise1 = Promise.resolve("Promise 1 Complete!");
// const Promise2 = new Promise((res,rej) => {
//     setTimeout(() => {
//         res("Promise 2 Complete!");
//     },2000);
// });

// Promise1.then((res) => console.log(res));
// Promise2.then((res) => console.log(res));
// Promise.all([Promise1,Promise2]).then((res) => console.log(res));

// ---------------------------------------------------------------

// Third Example

// function getMessage(){

//     return new Promise((res,rej) => {
//         setTimeout(() => {
//             res("My Message is Here!!!");
//         },2000);
//     });
// }

// function printMessage(msg){
//     console.log(msg)
// }

// getMessage().then(printMessage);