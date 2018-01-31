import config from 'universal-config';
import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({
    applicationId: config.get('APPLICATION_ID'),
    secret: config.get('SECRET'),
    callbackUrl: config.get('CALLBACK_URL')
});

unsplash.photos.getRandomPhoto({ username: "naoufal" })
    .then(toJson)
    .then(json => {
        // document.body.style.backgroundImage = json;
        console.log(json);
    });

let month0 = '1461407665364-25b173b7ffe2';
let image1 = '1482784160316-6eb046863ece';
let month10 = '1505072276982-d6c55de5d5d8';


let images = [
    '1461407665364-25b173b7ffe2', //0    jan
    '1486230057997-a68a7fe3b16e', //1    feb
    '1503424160383-57de83bd6fb2', //2    mar
    '1503154523893-ea172b48c509', //3    apr
    '1483285396821-476f683a584a', //4    may
    '1491879527886-b425119e2c51', //5    jun
    '1432889490240-84df33d47091', //6    jul
    '1476673160081-cf065607f449', //7    aug
    '1418154789672-7414683a8281', //8    sep
    '1476458393436-fb857cc4c7b5', //9    oct
    '1505072276982-d6c55de5d5d8', //10   nov
    '1484497283823-5673190b78ec'  //11   dec
];
let d = new Date();
let thisMonth = d.getMonth();

randomMonth = Math.floor(Math.random() * 10);
let currentImage = images[thisMonth]; //proper final line, changes on the right month
//let currentImage = images[randomMonth]; //random picture with every refresh

let setURL = 'https://images.unsplash.com/photo-'+currentImage+'?auto=format&fit=crop&w=1950&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D';

//document.body.style.backgroundImage = currentImage;
document.body.style.backgroundImage = "url("+setURL+")";

console.log('today:'+thisMonth);

//--

// let manualUploader = new qq.FineUploader({
//     element: document.getElementById('fine-uploader-manual-trigger'),
//     template: 'qq-template-manual-trigger',
//     request: {
//         endpoint: '/server/uploads'
//     },
//     thumbnails: {
//         placeholders: {
//             waitingPath: '/source/placeholders/waiting-generic.png',
//             notAvailablePath: '/source/placeholders/not_available-generic.png'
//         }
//     },
//     autoUpload: false,
//     debug: true
// });

// qq(document.getElementById("trigger-upload")).attach("click", function() {
//     manualUploader.uploadStoredFiles();
// });