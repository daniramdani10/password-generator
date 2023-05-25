let pwlength = document.getElementById('passwordLength')
let pw = document.getElementById('password')
let saveBtn = document.getElementById('saveButton')

function generatePassword(len){
    const lowerAlphabet = "abcdefghijklmnovqrstuvwxyz"
    const upPerAlphabet = "ABCDEFGHIJKLMNOVQRSTUVWXYZ"
    const numerik = "0123456789"
    const symbol = "!@#$%^&*()_+=-[]\}{;':,./?><`~`"

    const data = lowerAlphabet + upPerAlphabet + symbol + numerik
    let generator = '';
    for (let i=0; i<len; i++){
        generator += data[~~(Math.random() * data.length)];   
    }
    return generator;
}

function getPassword(){
    const newPassword = generatePassword(pwlength.value);
    pw.value = newPassword;
    setTimeout (() => {
        alert('password berhasil dibuat')

    },1000)
}
function savePassword(){
    dataPw = pw.value;
    saveBtn.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`Password Saya : ${dataPw}`))
    saveBtn.setAttribute('download', 'DataPasswordGenerator.txt')
}