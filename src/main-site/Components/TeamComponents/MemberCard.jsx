import react from "react";
import Card from "react-bootstrap/Card";
import user from "../../../assets/Sample_User_Icon.png";
import "../../../index.css";

const MemberCard = (props) => {
  return (
  props.isLoading ? <div className="loader"></div> :  
    <Card
      style={{
        width: "18rem",
        boxShadow: "10px 10px 5px 0px rgb(196,196,196)",
      }}
      className="mb-5 mx-3 bg-white">
      <div className="container">
        <Card.Img
          variant="top"
          src={props.member.image_url ? props.member.image_url : user}
          style={{
            maxHeight: "30vh",
            width: "100%",
            backgroundSize: "cover",
          }}
        />
      </div>
      <Card.Body>
        <Card.Title className="my-3 p-2">{props.member.name}</Card.Title>
        <Card.Text className="text-left my-2 p-2">
          <span className="text-blue-700">Position</span>: {props.member.position}<br/>  
          <span className="text-blue-700">Status</span>: {props.member.status}<br />
          <span className="text-blue-700">Joined year</span>: {props.member.year_joined}
        </Card.Text>
       
      </Card.Body>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
        className="container mb-3 mt-3">
        <a
          style={{
            color: "red",
            fontSize: "25px",
          }}
          href={`${props.member.telegram_url}`}>
          <i class="fab fa-twitter social-media-icon"></i>
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
