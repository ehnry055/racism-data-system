import React from 'react';
import '../styles/HomePage.css'; 

const HomePage = () => {
  return (
    <div className="home-container">
      <h2 className="about-title">Home</h2>
      <div className="about-content">
        <p>
          Our goal is to provide an easy-to-use way of accessing a wealth of data about historial instances of racism throughout US counties. 
          The data is based on the Ogun measure, a method of capturing structural racism through 10 facets, 2 pathways, spanning across 3 historical periods. 
        </p>
      </div>
      <div className="about-grid">
        <div className="text-box">
          <p>
          10 facets:
            <ol>
              <li>Residential Segregation and Gentrification (RSG)</li>
              <li>Property Ownership (PO)</li>
              <li>Government Representation (GR)</li>
              <li>Policing and Incarceration (PI)</li>
              <li>Income and Poverty (IP)</li>
              <li>Occupational Segregation and Unemployment (OSU)</li>
              <li>Healthcare Access (HCA)</li>
              <li>Healthy Food Access (HFA)</li>
              <li>Environmental Pollution (EP)</li>
              <li>Media and Marketing (MM)</li>
            </ol> 
          </p>
        </div>
        {/* <div className="placeholder-box"></div> */}
      </div>
      <div className="about-grid">
        {/*<div className="placeholder-box"></div>*/}
        <div className="text-box">
          <p>
          2 pathways:
          <li>Structural Violence (SV)</li>
          <li>Limited or Restricted Access (LRA)</li>
          <br />
          3 historical periods:
          <li>Before the Civil Rights Act of 1968 that included the Fair Housing Act legally ending residential segregation (Time Period 1)</li>
          <li>During Desegregation or Integration (1969-1999) (Time Period 2)</li>
          <li>Modern Times (2000-present) (Time Period 3)</li>

          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
