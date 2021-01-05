import React from 'react';

import Layout from '../components/layout';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="wrapper">
      <section id="intro" className="wrapper style1 fullscreen fade-up">
        <div className="inner">
          <h1>KMU SSC ICT CLUB</h1>
          <p>
            The abbreviation "ICT" in ICT club stands for Information and
            Communication Technology. In this club, students can discuss and
            learn about ICT topics. This club will equip members of the club
            with a technology-enabled future. Thereby making technological
            catalysts rather than just being observers of innovation.
          </p>
        </div>
      </section>

      <section id="one" className="wrapper style2 spotlights">
        <section>
          <div className="content">
            <div className="inner">
              <h2>What is the purpose of the club</h2>
              <p>
                The purpose of this club is to enhance the ICT skill and
                know-how of the members of the club, introduce the concepts of
                computer science to the members of the club, introduce members
                of the club to the IT sector of Ethiopia, develop the
                problem-solving ability of members of the club, improve
                communication skills and create several products either software
                or hardware that facilitate the teaching and learning process of
                the school.
              </p>
            </div>
          </div>
        </section>
      </section>

      <section id="two" className="wrapper style3 fade-up">
        <div className="inner">
          <h2>What we do</h2>
          <p>The following are the goals of the club:</p>
          <div className="features">
            <section>
              <span className="icon major fa-check" />
              <h3>Increasing students knowledge in several ICT fields</h3>
            </section>
            <section>
              <span className="icon major fa-check" />
              <h3>
                Raising awareness of members of the club of several ICT related
                careers
              </h3>
            </section>
            <section>
              <span className="icon major fa-check" />
              <h3>
                Enhancing the creative, collaborative, communicative skills of
                members
              </h3>
            </section>
            <section>
              <span className="icon major fa-check" />
              <h3>
                Increasing students interset in ICT fields by inviting
                experienced members of Ethiopia's ICT sector to club meetings
              </h3>
            </section>
            <section>
              <span className="icon major fa-check" />
              <h3>
                Preparing competitions to enable the creation of innovative
                ideas
              </h3>
            </section>
            <section>
              <span className="icon major fa-check" />
              <h3>
                Organizing show and tell events where students can show their
                projects to other students
              </h3>
            </section>
            <section>
              <span className="icon major fa-check" />
              <h3>
                Creating learning opportunities to help students get familiar
                with ICT topics
              </h3>
            </section>
            <section>
              <span className="icon major fa-check" />
              <h3>
                Gathering and Distributing learning resource to and from the
                members
              </h3>
            </section>
          </div>
        </div>
      </section>

      <GetInTouch />
    </div>

    <Footer />
  </Layout>
);

export default IndexPage;

const GetInTouch = () => (
  <section id="three" className="wrapper style1 fade-up">
    <div className="inner">
      <ul class="actions">
        <li>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSefEMSg8vsDhiPjjlj3G_PLWB2nGD1lns_v05rwKYWQCbwcow/viewform?usp=sf_link"
            class="button primary"
          >
            Fill Registration Form
          </a>
        </li>
        <li>
          <a href="https://bit.ly/kmu-ict" class="button default">
            Telegram Group
          </a>
        </li>
      </ul>
    </div>
  </section>
);
