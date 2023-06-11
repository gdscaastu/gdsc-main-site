import react from "react";
import Card from "react-bootstrap/Card";
import user from "../../../assets/Sample_User_Icon.png";
import "../../../index.css";
import { Link } from "react-router-dom";
const Contributer = ({ contributer }) => {
  return (
    <Card
      style={{
        width: "15rem",
        boxShadow: "10px 10px 5px 0px rgb(224, 222, 222)",
      }}
      className="mx-5 mb-5 ">
      <div className="container">
        <Card.Img
        className="w-[100%] rounded"
          variant="top"
          src={contributer.image_url ? contributer.image_url : user}
          style={{
            maxHeight: "25vh",

          }}
        />
      </div>
      <Card.Body>
        <Card.Title className="my-1 p-2">{contributer.name}</Card.Title>
        <Card.Text className="my-3 p-2">
         <span className="text-blue-400">Status: </span>{contributer.status}<br />
         <span className="text-blue-400">Role: </span>{contributer.role}<br />

        </Card.Text>
      </Card.Body>
      <div
        className="container mb-3 flex flex-wrap justify-around">
        <Link
          style={{
            color: "red",
            fontSize: "25px",
          }}
          to={`https://twitter.com/${contributer.telegram_url}`}>
          <i class="fab fa-twitter social-media-icon"></i>
        </Link>
        <a
          style={{
            color: "red",
            fontSize: "25px",
          }}
          href={`https://github.com/${contributer.github_url}`}>
          <i class="fab fa-github"></i>
        </a>
        <a
          style={{
            color: "red",
            fontSize: "25px",
          }}
          href={`https://linkedin.com/in/${contributer.linkedin_url}`}>
          <i class="fab fa-linkedin-in social-media-icon"></i>
        </a>
      </div>
    </Card>
  );
};

export default Contributer;
