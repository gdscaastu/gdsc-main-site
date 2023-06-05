import react from "react";
import Card from "react-bootstrap/Card";
import user from "../../../assets/Sample_User_Icon.png";
import "../../../projectDetail.css";
const Contributer = ({ contributer }) => {
  return (
    <Card style={{ width: "18rem" }} className="contributer mb-5">
      <div className="container">
        <Card.Img
          variant="top"
          src={contributer.image_url ? contributer.image_url : user}
          style={{
            maxHeight: "25vh",
          }}
        />
      </div>
      <Card.Body>
        <Card.Title>{contributer.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <div className="social-media container mb-3">
        <a href={contributer.telegram_url}>
          <i class="fab fa-telegram social-media-icon"></i>
        </a>
        <a href={contributer.github_url}>
          <i class="fab fa-github social-media-icon"></i>
        </a>
        <a href={contributer.linkedin_url}>
          <i class="fab fa-linkedin-in social-media-icon"></i>
        </a>
      </div>
    </Card>
  );
};

export default Contributer;
