import { useParams } from "react-router-dom";
import "./Photo.scss";

function Photo({ photos }) {
  const { id } = useParams();
  const photo = photos.find((photo) => photo.id === id);

  return (
    <div className="Photo">
      {photo ? (
        <>
          <img className="Photo-image" src={photo.src} alt={photo.alt} />
          <p className="Photo-title">{photo.title}</p>
          <p className="Photo-subtitle">{photo.subtitle}</p>
        </>
      ) : (
        <p>No photo found</p>
      )}
    </div>
  );
}

export default Photo;
