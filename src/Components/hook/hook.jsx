import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { SpinnerDiamond } from 'spinners-react';
import axios from "axios";
import "./hooks.css";

const FunctionalHook = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(true);
    const [loading, setLoading] = useState(false);

    const getData = async (value) => {
        setLoading(true);
        if (value === ``){
            value = `all`;
        };
        let response = await axios.get(
            `https://newsapi.org/v2/everything?apiKey=b5305618e2b14b5fad3fd5edc494de20&q= ${value}`
        );
        if (!response){
            setLoading(false);
            setError(true);
        }else{
            setError(false);
            setLoading(false);
            setData(response.data.articles);
            console.log(response.data.articles);
        }
    }
            
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container news-container">
            <div className="row">
                <h1 className="news-title">Latest News</h1>
                <input type="text" className="form-control news-search" id="search" placeholder="Search News.."
                        onChange={(e) => getData(e.target.value)} />
                {error && 
                    <div className="alert alert-danger">
                        Data No Response !
                    </div>
                }
                {loading ? 
                    <SpinnerDiamond className="spinner" size={90} thickness={180} speed={180} color={"rgba(172, 57, 57, 1)"} secondaryColor={"rgba(0, 0, 0, 0.44)"} /> :
                    data.map((n, index) => (
                        <div className="col-md-4 my-3 news-card" key={index}>
                            <div className="card">
                                <img src={n.urlToImage} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{n.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{n.publishedAt}</h6>
                                    <h6 className="card-subtitle mb-2 text-muted">{n.source.name}</h6>
                                    <h6 className="card-subtitle mb-2">{n.description}</h6>
                                    <a href={n.url} className="btn btn-primary news-read-more">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default FunctionalHook;
