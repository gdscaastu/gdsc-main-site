import react from "react";
import Card from "react-bootstrap/Card";
import user from "../../../assets/Sample_User_Icon.png";
import "../../../index.css";

const Contributer = ({ contributer }) => {
  return (
    <Card
      style={{
        width: "16rem",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
      className="mx-5 pt-2 mb-5 "
    >
      <div className="container">
        <Card.Img
          className="mt-3 mx-auto d-block rounded-full border border-dark border-2"
          variant="top"
          src={contributer.image_url ? contributer.image_url : user}
          style={{
           objectFit: "cover",
           width: "150px",
            height: "150px",
          }}
        />
      </div>
      <Card.Body>
        <Card.Title className="my-1 text-center p-2">{contributer.name}</Card.Title>
        <Card.Text className="my-3 p-2">
          <span className="text-blue-400">Role:</span> {contributer.role}<br/>
          <span className="text-blue-400">Member type:</span> {contributer.member_type}<br/>
          <span className="text-blue-400">Status:</span> {contributer.status} Member 
        </Card.Text>
      </Card.Body>
      <div className="container mb-3 pb-2 flex flex-wrap justify-around">
        <a
          style={{
            color: "red",
            fontSize: "25px",
          }}
          href={`https://twitter.com/${contributer.telegram_url}`}
        >
          <i class="fab fa-twitter"></i>
        </a>
        <a
          style={{
            color: "red",
            fontSize: "25px",
          }}
          href={`https://github.com/${contributer.github_url}`}
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          style={{
            color: "red",
            fontSize: "25px",
          }}
          href={`https://linkedin/in/${contributer.linkedin_url}`}
        >
          <i class="fab fa-linkedin-in social-media-icon"></i>
        </a>
      </div>
    </Card>
  );
};

export default Contributer;
