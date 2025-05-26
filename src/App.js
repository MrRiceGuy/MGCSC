
import React, { useState } from "react";
import Bios from "./components/Bios";
import './App.css';

function App() {

  const [showBios, setShowBios] = useState(false);

  return (
    <div className="App">
      <Bios isOpen={showBios} onClose={() => setShowBios(false)} />
      <header className="App-header" title = "CSC">
      <div className='logo'>
      </div>
      </header>


      <div className = "main">
        <div> 
          
          <div className='top'>

            <div className='nav'>
              <a href ='#services'>Services</a>
              <a href onClick={() => setShowBios(true)} className="team-btn">
        Meet the Team
      </a>
              <a href ='#contact'>Contact</a>

            </div>
          </div>

          <div className='section-1 video-div'>
                  <video autoPlay loop muted playsInline>
                <source
                  src="/images/yellowColorado.mp4"
                  type="video/mp4"
                />
              </video>

            <h1>Building Resilience for Health Equity</h1>

            <div className='meetwithus'><a href ='https://calendly.com/mgalaviz21'>Meet with Us</a></div>
           {/*<div className='meetwithus'><a href =''>Meet Our Team</a></div> */}
          </div>

          <div className='section-2'>
            <ul>
              <li><h2>Assessment</h2>
              <p>Know where you're going and why, with full community buy-in, and continually improve.</p></li>
              
              <li><h2>People</h2><p>Build Cohesive and energized teams that understand and tust each other.</p></li>
              
              <li><h2>Processes</h2><p>Clearly map your mission's success, and activate support to overcome barriers.</p></li>
              
              <li><h2>Resources</h2><p>Fully fund and equip your initiatives for success and impact</p></li>
            </ul>
          </div>

          <div className='section-3'>
            <h1>Solving big problems takes time.</h1>
            <h2 className='yellow'>Are you ready for that journey?</h2>
            <ul>
              <li><h3>Are you unsure about the root causes of your community's challenges?</h3></li>
              <li><h3>Is it hard to see how all the pieces fit together?</h3></li>
              <li><h3>Are the next steps unclear or confusing?</h3></li>
              <li><h3>Is your team overwhelmed, turning over, or struggling to hire?</h3></li>
              <li><h3>Are you chronically under-resourced?</h3></li>
              <li><h3>Do you wonder how you can possibly do everything that is needed?</h3></li>
            </ul>

          </div>

          <div className='section-4'>
              <h1>
              You have the passion for the mission.</h1>

              <h2>We ensure you have the understanding, team, methods, and tools to succeed.</h2>
          </div>    

          <div className='section-5'>

            <div className='mountainousbackground-left'>

            </div>

            <div className='mountainousbackground-right'>
               
             </div>

             <div className = 'mountainWords'>
              <h3>We help changemakers build resiliency.</h3>
             <h1>Built To Last</h1>
             </div>

          </div>

          <div className='section-6'>
                <h1>How We Help</h1>
                <div className='gethelp'>
                  <h1>Empower You with Training</h1>
                  <ul>
                    <li>Finding Funding</li>
                    <li>Writing a Winning Grant</li>
                    <li>Managing Grant Funds</li>
                  </ul>

                  <div className='help-button'>
                  {/* <a href =''>More</a>*/} 
                  </div>
                
                </div>
          </div>

          <div id = "services" className='section-7'>
         
                <div className='sec'>
                  <h3>Assessment</h3>
                  <ul>
                    <li>Community Health Needs Assessments</li>
                    <li>Feasibility Studies</li>
                    <li>Environmental Scanning</li>
                  </ul>
                </div>
                <div className='sec'>
                  <h3>People</h3>
                    <ul>
                    <li>Leadership Retreats</li>
                    <li>MBTI</li>
                    <li>Emotional Intelligence</li>
                    <li>Adult Learning</li>
                    <li>Trauma-informed Leadership</li>
                    </ul>

                </div>
                <div className='sec'>
                  <h3>Process</h3>
                  <ul>
                    <li>Technical Assistance</li>
                    <li>Project Planning</li>
                    <li>Resource Development and Connection</li>
                    <li>Funding Stragegies</li>
                  </ul>
                </div>
                <div className='sec'>
                  <h3>Evolution</h3>
                  <ul>
                    <li>Strategic Planning</li>
                    <li>Business Planning</li>
                    <li>Leadership Development</li>
                  </ul>
                </div>
            
          </div>

          <div className='section-8'>
            <h2>We cultivate space for capacity, restore ecosystems, and shift paradigms with partners in meaningful change.</h2>
            <div className='lightbulb-pic'></div>
          </div>

          <div className='section-10'>

            <div id = "contact" className = 'infobox'>
              <ul>
                <li><a href = 'https://calendly.com/mbosworth-2'>Book with Melissa</a></li>
                <li><a href = 'https://calendly.com/mgalaviz21'>Book with Megan</a></li>
              </ul>

              <h4>Email us at info@verticalstrategies.net</h4>

              <p>We are always pleased to hear from organizations interested in maximizing their capacity.  Contact us today.</p>
            </div>
          </div>

          <div className='bottom'>

          </div>
        </div>
      </div>
      <div id='logobox'></div>
      <div className='footer'> 2025</div>

  
    </div>
  );
}

export default App;
