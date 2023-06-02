import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Movies.css";
import { useNavigate } from "react-router-dom";


const Movies = ({myData}) => {
  const navigate = useNavigate()
  return (
    <>{
      myData.map((data)=>{
        const{name,language,image,genres} = data.show;
     const handler = () =>{
       navigate('summary')
     }

        return(
    <div className="card-container">
    <div className="image-container">
      <img src={image.medium} alt='' /> 
      </div>
      <div className="card-title">
       <span className="boldd">{name}</span> 
      </div>
      <div className="card-lang">
       <span className="left-s">Language:</span>  {language}
      </div>
      <div className="card-genre">
       <span className="left-s">Genre: </span><span>{genres[0]}</span> <span>{genres[1]}</span> <span>{genres[2]}</span>   
      </div>
      <button type="button" onClick={handler} className="btn btn-dark">Show more..</button>
    </div>
        )
      })
    }
    
  </>
  )
}

export default Movies