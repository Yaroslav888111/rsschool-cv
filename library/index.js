function scoreGraditude() {
    let valid = 10;
    let semantic = 16;
    let layout =  54;
    let commonReq = 20;
    let summ = valid + semantic + layout + commonReq;
    return summ;
}
let score = scoreGraditude ();
console.log(score);