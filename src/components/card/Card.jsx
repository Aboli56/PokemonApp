import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { GoInfo } from "react-icons/go";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import { SiPokemon } from "react-icons/si";
import Stats_Modal from "../stats_modal/Stats_Modal";
import "./Card.css";
const Card = ({ name, id, url_info, text_for_search }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [dataForFrontStats, setdataForFrontStats] = useState({
    pokiTypes1: "",
    pokiTypes2: "",
    height: "",
    weight: "",
  });

  let strArr = url_info.split("/");
  strArr[6] = id;
  url_info = strArr.join("/");
  var newUrl = url_info;

  useEffect(() => {
    async function fetchData() {
      let res = await fetch(newUrl);
      let data = await res.json();
      setdataForFrontStats({
        ...dataForFrontStats,
        pokiTypes1: data.types[0].type.name,
        pokiTypes2: data.types.length > 1 ? data.types[1].type.name : "",
        height: data.height,
        weight: data.weight,
      });
    }
    fetchData();
  }, [id]);

  let card_bg_color_img = "";
  let card_bg_color = "";

  switch (dataForFrontStats.pokiTypes1) {
    case "grass":
      card_bg_color_img =
        "linear-gradient(140.1deg, rgba(24, 138, 141, 1) 20.5%, rgba(96, 221, 142, 1) 88.1%)";
      break;

    case "fire":
      card_bg_color_img =
        "linear-gradient(-90deg, rgb(255 152 0 / 31%) 0%, rgb(247, 107, 28) 120%)";
      card_bg_color = "#FAD961";
      break;

    case "water":
      card_bg_color_img = "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)";
      card_bg_color = "#0093E9";
      break;

    case "bug":
      card_bg_color_img = "linear-gradient(132deg, #F4D03F 0%, #16A085 100%)";
      card_bg_color = "#F4D03F";
      break;

    case "normal":
      card_bg_color_img =
        "radial-gradient( circle 1294px at -15.5% 23.8%,  rgba(255,206,149,1) 0%, rgba(247,92,92,1) 44.9%, rgba(108,0,96,0.97) 93.8% )";
      card_bg_color = "";
      break;

    case "poison":
      card_bg_color_img =
        "linear-gradient( 109.6deg,  rgba(101,58,150,1) 29.9%, rgba(168,141,194,1) 99.9% )";
      card_bg_color = "";
      break;

    case "ground":
      card_bg_color_img =
        "linear-gradient( 111.8deg,  rgba(151,192,47,1) 0.6%, rgba(101,142,21,1) 107.2% )";
      card_bg_color = "";
      break;

    case "fairy":
      card_bg_color_img =
        "linear-gradient( 109.6deg,  rgba(254,87,98,1) 11.2%, rgba(255,107,161,1) 99.1% )";
      card_bg_color = "";
      break;

    case "fighting":
      card_bg_color_img =
        "radial-gradient( circle farthest-corner at 10.6% 22.1%,  rgba(206,18,18,1) 0%, rgba(122,21,21,1) 100.7% )";
      card_bg_color = "";
      break;

    case "rock":
      card_bg_color_img =
        "radial-gradient( circle farthest-corner at 50.3% 44.5%,  rgba(116,147,179,1) 0%, rgba(62,83,104,1) 100.2% )";
      card_bg_color = "";
      break;

    case "ghost":
      card_bg_color_img =
        "radial-gradient( circle farthest-corner at 10% 20%,  rgba(51,51,81,1) 0%, rgba(34,72,86,1) 90% )";
      card_bg_color = "";
      break;

    case "psychic":
      card_bg_color_img =
        "radial-gradient( circle farthest-corner at 10% 20%,  rgba(196,158,212,1) 0%, rgba(110,29,29,1) 90% )";
      card_bg_color = "";
      break;

    case "electric":
      card_bg_color_img =
        "linear-gradient( 284deg,  rgba(255,204,0,1) 53.7%, rgba(253,168,10,1) 88.9% )";
      card_bg_color = "";
      break;

    case "ice":
      card_bg_color_img =
        "linear-gradient( 109.6deg,  rgba(56,230,250,1) 30%, rgba(52,116,243,1) 91.2% )";
      card_bg_color = "";
      break;

    case "steel":
      card_bg_color_img =
        "linear-gradient( 107deg,  rgba(72,81,86,1) 11.2%, rgba(187,187,187,1) 90.7% )";
      card_bg_color = "";
      break;

    case "dark":
      card_bg_color_img =
        "linear-gradient( 180.2deg,  rgba(24,24,24,1) 1.2%, rgba(58,58,58,1) 89.8% )";
      card_bg_color = "";
      break;

    case "dragon":
      card_bg_color_img =
        "linear-gradient( 108.3deg,  rgba(252,198,41,1) 11.2%, rgba(209,5,5,1) 84.1% )";
      card_bg_color = "";
      break;

    case "flying":
      card_bg_color_img =
        "linear-gradient( 103.9deg,  rgba(12,166,180,1) 3%, rgba(100,51,161,1) 93.9% )";
      card_bg_color = "";
      break;

    default:
      card_bg_color_img = "";
      break;
  }

  let pokemonImg = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`;

  return (
    <div className="container cards_in_app mb-4">
      <div className="row">
        <div
          className="col-lg-12 text-center card_img"
          style={{
            backgroundImage: card_bg_color_img,
            backgroundColor: card_bg_color,
          }}
        >
          <div className="pokemon_title">
            <p>{name}</p>
            <p>#{id}</p>
          </div>
          <img src={pokemonImg} alt="poki" width="120px" height="120px" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 pokemon_desc pt-3 pb-3">
          <ul className="list">
            <li>
              <ul className="sublist">
                <li>
                  {dataForFrontStats.pokiTypes2 === ""
                    ? `${dataForFrontStats.pokiTypes1}`
                    : `${dataForFrontStats.pokiTypes1} / ${dataForFrontStats.pokiTypes2}`}
                </li>
                <li>type</li>
              </ul>
            </li>
            <li>
              <ul className="sublist">
                <li>{dataForFrontStats.weight}</li>
                <li>weight</li>
              </ul>
            </li>
            <li>
              <ul className="sublist">
                <li>{dataForFrontStats.height}</li>
                <li>height</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 mb-3 info_btn text-center">
          <button className="btn" onClick={() => setModalShow(true)}>
            {/* <GoInfo /> */}
            <MdOutlineCatchingPokemon className="info_icon" />
          </button>

          <Stats_Modal
            card_bg_color_img={card_bg_color_img}
            pokemonImg={pokemonImg}
            show={modalShow}
            url_info={newUrl}
            text_for_search={text_for_search}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
