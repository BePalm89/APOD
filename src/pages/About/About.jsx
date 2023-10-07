import React from "react";
import ApiDescription from "../../components/about/ApiDescriptionComponent/ApiDescription";
import Title from "../../components/shared/Title/Title";
import { apisData } from "./data";

const About = () => {
  return (
    <>
      <Title title={"Nasa's api"}></Title>
      {apisData.map((apiData) => (
        <ApiDescription
          key={apiData.id}
          title={apiData.title}
          subtitle={apiData.subtitle}
          description={apiData.description}
        ></ApiDescription>
      ))}
    </>
  );
};

export default About;
