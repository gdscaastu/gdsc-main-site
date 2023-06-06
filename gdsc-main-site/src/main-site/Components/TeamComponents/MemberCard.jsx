import react from "react";
import Card from "react-bootstrap/Card";
import user from "../../../assets/Sample_User_Icon.png";
import "../../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const MemberCard = (props) => {
  return (
    <Card
      style={{
        width: "18rem",
        boxShadow: "10px 10px 5px 0px rgb(196,196,196)",
      }}
      className="mb-5 mx-3">
      <div className="container">
        <Card.Img
          variant="top"
          src={props.member.image_url ? props.member.image_url : user}
          style={{
            maxHeight: "25vh",
          }}
        />
      </div>
      <Card.Body>
        <Card.Title>{props.member.name}</Card.Title>
        <Card.Text className="text-left">
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
          href={`${props.member.telegram_url}`}>
          <i class="fab fa-telegram social-media-icon"></i>
        </a>
        <a
          style={{
            color: "red",
            fontSize: "25px",
          }}
          href={`${props.member.github_url}`}>
          <i class="fab fa-github social-media-icon"></i>
        </a>
        <a
          style={{
            color: "red",
            fontSize: "25px",
          }}
          href={`${props.member.linkedin_url}`}>
          <i class="fab fa-linkedin-in social-media-icon"></i>
        </a>
      </div>
    </Card>
  );
};

export default MemberCard;
