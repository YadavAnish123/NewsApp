import React from 'react'



const Newsitems =(props)=> {
   
    let { title, description, urlToImage, url, author, publishedAt ,name} = props

    return (
      <div>

        <div className="card" style={{ width: "18rem" }}>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {name}

          </span>

          <img src={urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p> 
            <p className="card-text"><small className="text-danger ">By "{author ? author : "Unknown"}" on {new Date(publishedAt).toGMTString()} </small></p>
            <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-dark">Read more..</a>
          </div>
        </div>
      </div>
    )
  
}

export default Newsitems
