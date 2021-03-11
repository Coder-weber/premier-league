import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import image1 from "../../rsc/Leauge Logo/image 1.png";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import CardsPart from "../../Cards/CardsPart";
import img1 from "../../asserts/Leauge Logo/image 1.png";
import "../../Header/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faArrowRight,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import "./sports.css";

const Sports = (props) => {
  const { idLeague, strLeague, strSport, strLeagueAlternate } = props.league;
  const loops = Object.keys(props);

  const history = useHistory();
  const details = (id) => {
    const url = `/sport/${id}`;
    history.push(url);
  };

  return (
    <div className="card text-center shadow" >
      <div className="overflow">
        <img src={img1} alt="" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{strLeague}</h4>
        <p className="card-text text-secondary">Sports type: {strSport}</p>

        <button
          className="btn btn-outline-success"
          onClick={() => details(idLeague)}
        >
          Explore <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </button>
      </div>
    </div>

  );
};

export default Sports;
