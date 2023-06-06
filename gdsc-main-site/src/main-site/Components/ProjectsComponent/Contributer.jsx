import react from "react";
import Card from "react-bootstrap/Card";
import user from "../../../assets/Sample_User_Icon.png";
import "../../../index.css";

const Contributer = ({ contributer }) => {
  return (
    <Card
      style={{
        width: "18rem",
        boxShadow: "10px 10px 5px 0px rgb(224, 222, 222)",
      }}
      className="contributer mb-5">
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
        className="container mb-3">
        <a
          style={{
            color: "red",
            fontSize: "25px",
          }}
          href={contributer.telegram_url}>
          <i class="fab fa-telegram"></i>
        </a>
        <a
          style={{
            color: "red",
            fontSize: "25px",
          }}
          href={contributer.github_url}>
          <i class="fab fa-github"></i>
        </a>
        <a
          style={{
            color: "red",
            fontSize: "25px",
          }}
          href={contributer.linkedin_url}>
          <i class="fab fa-linkedin-in social-media-icon"></i>
        </a>
      </div>
    </Card>
  );
};

export default Contributer;
