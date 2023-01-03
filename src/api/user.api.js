import axios from 'axios'

async function register  (data){

    const dataText = await axios.post('http://localhost:8000/api/register?name='+data.name+'&username='+data.username+'&email='+data.email+'&password=' +data.password)
    return dataText.data;

}

async function login  (data){
    console.log(data.email,
        data.password);
    const dataText = await axios.post('http://localhost:8000/api/login?email='+data.email+'&password=' +data.password)
    
    if(dataText.data.access_token )
        localStorage.setItem('token',dataText.data.access_token )

    return dataText.data;

}

export {

    register,
    login
};


