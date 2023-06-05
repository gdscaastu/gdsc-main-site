import react from "react";
import Card from "react-bootstrap/Card";
import user from "../../../assets/Sample_User_Icon.png";
import "../../../teamPage.css";

const MemberCard = (props) => {
  return (
    <Card style={{ width: "18rem" }} className="team-member-card mb-5 mx-3">
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
      <div className="social-media container mb-3">
        <a href={`${props.member.telegram_url}`}>
          <i class="fab fa-telegram social-media-icon"></i>
        </a>
        <a href={`${props.member.github_url}`}>
          <i class="fab fa-github social-media-icon"></i>
        </a>
        <a href={`${props.member.linkedin_url}`}>
          <i class="fab fa-linkedin-in social-media-icon"></i>
        </a>
      </div>
    </Card>
  );
};

export default MemberCard;
