import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function SinglePost() {
    const { id, title, category , price , image ,description} = useParams()
    const [singlePost,setSinglePost] =useState({})
    const fetchSinglePostAPI =async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const finalRes = await res.json()
        setSinglePost(finalRes)        
    }
    useEffect(() => {
            fetchSinglePostAPI()
    },[])


    let [counter, setCounter] = useState(0);
    useEffect(() => {
        setCounter(counter);
    }, [0]);
  return (
      <div className="singlePost">
            <div className="image_container">
              <img src={singlePost.image} alt="" />
            </div>
            <div className="r_container">
              <p className="category">{singlePost.category}</p>
            <h2>{singlePost.title}</h2> 
              <p className="price">{ "$"}{singlePost.price}</p>
              <div className="adding">
                <div className='counter'>{counter}</div>
                <button className="btn" onClick={() => setCounter(counter + 1)}>Add To Cart</button>
              </div>
              <p className="details">Product Details</p>
              <p className="desc">{singlePost.description}</p>
            </div>
      </div>
  );
}
