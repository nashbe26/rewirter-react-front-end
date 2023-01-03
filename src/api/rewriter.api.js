import axios from 'axios'

async function rewriterFunc  (data){

    const dataText = await axios.get('http://localhost:8000/rewriter?text='+data.text+'&mode='+data.mode+'&lang='+data.lang)
    return dataText.data;

}

export {
    rewriterFunc
};


