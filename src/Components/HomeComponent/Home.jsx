import React, { useState } from "react";
import About from "../AboutComponent";
import Contact from "../ContactComponent";
import Gallery from "../GalleryComponent";
import Live from "../LiveComponent";
import Schedule from "../ScheduleComponent";
import Subscription from "../SubscriptionComponent";
import Trainers from "../TrainersComponent";
import "./Home.css";

export default function Home() {
  const [page, setPage] = useState("/");

  const handleClick = value => {
    setPage(value);
  };

  const displayComponent = () => {
    switch (page) {
      case "Home":
        return <div>Salut</div>;
      case "About":
        return <About />;
      case "Subscription":
        return <Subscription />;
      case "Schedule":
        return <Schedule />;
      case "Trainers":
        return <Trainers />;
      case "Gallery":
        return <Gallery />;
      case "Contact":
        return <Contact />;
      case "Live":
        return <Live />;
    }
  };

  return (
    <div className={"container"}>
      <nav>
        <button onClick={() => handleClick("Home")}>Acasa</button>
        <button onClick={() => handleClick("About")}>Despre noi</button>
        <button onClick={() => handleClick("Subscription")}>Abonament</button>
        <button onClick={() => handleClick("Schedule")}>Orar Clase</button>
        <button onClick={() => handleClick("Trainers")}>Instructori</button>
        <button onClick={() => handleClick("Gallery")}>Galerie</button>
        <button onClick={() => handleClick("Contact")}>Contact</button>
        <button onClick={() => handleClick("Live")}>Live</button>
      </nav>
      <div className={"body"}>{displayComponent()}</div>
      <footer>Darius Andronesi</footer>
    </div>
  );
}
