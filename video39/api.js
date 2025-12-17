// json formatter is used to manage api so that we can access data from the api easily.
const requesturl = 'https://api.github.com/users/hiteshchoudhary'
const xhr = new XMLHttpRequest();
xhr.open('GET',requesturl)
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText)
        console.log(data);
        console.log(data.followers);
        console.log(data.location);
    }
}
// when state changes the function will be executed which we will be executed by the help of onreadystatechange.
// when data comes from an api then it comes as an string.

xhr.send()
