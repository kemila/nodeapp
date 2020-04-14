// fetch('/api').then(function(res){
//     console.log(res);
// })

fetch('/api').then(async (res) => {
    const data = await res.json();
    console.log('data:' , data);
})