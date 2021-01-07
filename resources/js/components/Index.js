import React,{useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import Bar from './Bar';

function Index(){
    const [answerApi, setAnswerApi] = useState([]);

    useEffect(()=>{
        axios.get("http://laravelServer.test/api/auth/index")
        .then(result => setAnswerApi(result.data));
    },[]);

    console.log(answerApi);
    const listPublications = answerApi.map(item =>{
        return (
            <li key={item.id}>
                <h5>{item.title}</h5>
                <p>{item.publication}</p>
                <p>{item.city} - {item.community}</p>
            </li>
        )
    })

    return (
        <div>
           <Bar/> 
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h5>Publications</h5>
                                
                            </div>
                            <div className="card-body">
                                <ul>
                                    {listPublications}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;