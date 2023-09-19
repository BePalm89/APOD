import React from "react";
import { socialNetworksData } from "./data.js";
import * as FaIcons from "react-icons/fa";
import "./SocialNetwrok.css";

const SocialNetwork = () => {
  return (
    <ul className="social-netwrok-list">
      {socialNetworksData.map((social) => {
        const Icon = FaIcons[social.icon]; // Access the icon dynamically
        return (
          <li key={social.id}>
            <a href={social.url} target="_blank">
              <Icon className="icon" />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialNetwork;
