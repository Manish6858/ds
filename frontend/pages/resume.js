// This is a legacy component that loads my CV. Should not be a part of self.
// Need to find a way to move to self, maybe GraphQL+JSONResume or something.

import React, { Component } from "react";

class Resume extends Component {
  render() {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `
          <!doctype html>
          <html>
            <head>
          
            <meta charset='utf-8'>
            <meta name='viewport' content='width=device-width, user-scalable=no, minimal-ui'>
          
            <title>Divyendu Singh</title>
          
            <style>
            body {
            background: #EEEEEE;
            font: 13px "Times New Roman", Times, sans-serif;
            line-height: 1.4;
            margin: 40px 0;
          }
          em {
            color: #999;
          }
          p {
            line-height: 1.4;
          }
          ul {
            margin-bottom: 0;
          }
          li {
            margin-bottom: 2px;
          }
          a {
            text-decoration: none;
          }
          
          #resume {
            margin: 0 auto;
            max-width: 600px;
            padding: 80px 100px;
            background: #fff;
            border: 1px solid #ccc;
            box-shadow: 2px 2px 4px #aaa;
            -webkit-box-shadow: 2px 2px 4px #aaa;
          }
          
          .coursesList {
            width: 28%;
            vertical-align: top;
            display: inline-block;
          }
          
          .largeFont {
            font-size: 20px;
          }
          
          .smallFont {
            font-size: 13px;
          }
          
          .sectionBlock {
            display: flex;
            width: 100%;
          }
          
          .sectionName {
            width: 18%;
            vertical-align: top;
            display: inline-block;
          }
          
          .sectionContent {
            width: 80%;
            vertical-align: top;
            display: inline-block;
          }
          
          .sectionContent ul {
            padding-left: 20px;
            margin-top: 6px;
            list-style-type: circle;
          }
          
          .sectionContent .title {
            font-weight: bold;
          }
          
          .sectionContent .date {
            float: right;
          }
          
          .sectionContent .separator {
            height: 14px;
          }
          
          .sectionLine {
            border-style: dashed;
            border-width: 1px;
            border-color: #CFCFCF;
            margin-top: 10px;
            margin-bottom: 10px;
          }
          
          .divider {
            font-weight: bold;
            margin-left: 5px;
            margin-right: 5px;
          }
          
          .summary {
            margin-top: 6px;
          }
          
          .skillBlock {
            margin-bottom: 4px;
          }
          
          .jobBlock {
            page-break-inside: avoid;
          }
          
          /* Media Queries */
          @media only screen and (max-width: 40em) {
            body {
              margin: 0;
              font-size: 14px;
            }
            #resume {
              margin: 0 auto;
              max-width: 600px;
              padding: 0.5em 1em;
              border: none;
            }
            .sectionBlock {
              flex-direction: column;
            }
            .sectionContent {
              width: 100%;
            }
            .sectionContent .date {
              padding-right: 2em;
            }
            .sectionName {
              width: auto;
            }
            .largeFont {
              font-size: 20px;
            }
            .smallFont {
              font-size: 14px;
            }
          }
          
          @media print {
            body {
              background: #FFFFFF;
            }
            #resume {
              margin: 0 auto;
              max-width: 600px;
              padding: 0px 0px;
              border: 0px;
              background: #fff;
              box-shadow: none;
              -webkit-box-shadow: none;
            }
          
            a {
              color: black;
            }
          }
          
            </style>
          
            </head>
            <body>
          
            <div id='resume'>
            <div id='nameBlock' class='largeFont'>
              <span class='name'>
                Divyendu Singh
              </span>
            </div>
            <div id='basicsBlock' class='smallFont'>
              <div class='contactBlock'>
                <span class='email'>mail@divyendusingh.com</span>
                <span class='divider'>|</span>
                <span class='phone'>+91 98-45-225282 (skype: divyenduz)</span>
              </div>
                <div id='profilesBlock'>
                      <span class='url'>
                        <a href='https://github.com/divyenduz'>Github</a>
                      </span>
                      <span class='divider'>|</span>
                      <span class='url'>
                        <a href='http://stackoverflow.com/users/1366216/divyenduz'>Stackoverflow</a>
                      </span>
                      <span class='divider'>|</span>
                      <span class='url'>
                        <a href='https://divu.in'>Blog</a>
                      </span>
                      <span class='divider'>|</span>
                      <span class='url'>
                        <a href='https://www.linkedin.com/in/divyendu-singh-48850b37/'>Linkedin</a>
                      </span>
                      <span class='divider'>|</span>
                      <span class='url'>
                        <a href='https://twitter.com/divyenduz'>Twitter</a>
                      </span>
                      
                </div>
            </div>
            <div class='sectionLine'></div>
          
            <div id='summaryBlock' class="sectionBlock">
              <div class='sectionName'>
                <span>SUMMARY</span>
              </div>
              <div class='sectionContent'>
                <span>A young computer scientist from the top of India, the beautiful place called Jammu and Kashmir. I love making stuff, things that change the way the world operates, things that affect the space-time of the universe, things that have an impact.</span>
              </div>
            </div>
            <div class='sectionLine'></div>
          
            <div id='workBlock' class="sectionBlock">
              <div class='sectionName'>
                <span>EXPERIENCE</span>
              </div>
              <div class='sectionContent'>
                <div class="jobBlock">
                  <div class='blockHeader'>
                    <span class='title'>
                      Absolute Sports (Sportskeeda) - Full-Stack Engineer (Mobile Lead)
                    </span>
                    <span class='date'>
                      2014-11 &mdash; Present
                    </span>
                  </div>
                  <div><a href=''></a></div>
                  <ul class='highlights'>
                    <li>Mobile lead in second largest media startup with a very small engineering team (~6 members)</li>
                    <li>Solved media industry problems by creating a revenue share platform using custom analytics, enhancing editorial workflow and personalizing user feed</li>
                    <li>End to end product development, delivery, and support using agile methodologies</li>
                    <li>Key Skills - React, Node, DevOps, Android, php, DFP, HLS, SEO ; Domain - Media</li>
                  </ul>
                  <div class='separator'></div>
                </div>
                <div class="jobBlock">
                  <div class='blockHeader'>
                    <span class='title'>
                      Independent - Freelancer
                    </span>
                    <span class='date'>
                      2012-08 &mdash; Present
                    </span>
                  </div>
                  <div><a href=''></a></div>
                  <ul class='highlights'>
                    <li>On Fiverr - 4.9/5 star rating from 500+ clients with 20% world coverage working remotely. Profile link https://www.fiverr.com/divyenduz</li>
                    <li>20+ mid-size projects as independent contractor in various domains.</li>
                    <li>Key Skills - React (Best rated), React Native, GraphQL, Next.js, Node ; Domain - Mixed</li>
                  </ul>
                  <div class='separator'></div>
                </div>
                <div class="jobBlock">
                  <div class='blockHeader'>
                    <span class='title'>
                      Tata Consultancy Services - Assistant System Engineer
                    </span>
                    <span class='date'>
                      2014-01 &mdash; 2014-11
                    </span>
                  </div>
                  <div><a href=''></a></div>
                  <ul class='highlights'>
                    <li>Worked for the client &#x27;GE&#x27; and awarded with &#x27;Star of the learner&#x27;s group&#x27;</li>
                    <li>Key Skills - React, Node, Cordova ; Domain - Finance</li>
                  </ul>
                  
                </div>
              </div>
            </div>
            <div class='sectionLine'></div>
          
          
          
            <div id='volunteer' class="sectionBlock">
              <div class='sectionName'>
                <span>VOLUNTEERING</span>
              </div>
              <div class='sectionContent'>
                <div class='blockHeader'>
                  <span class='title'>Video Course: Learn GraphQL with React and Relay - Packt Author</span>
                  <span class='date'>
                    2017-09 &mdash; 2017-11
                  </span>
                  <ul class='highlights'>
                    <li>Authored a course on GraphQL in collaboration with Packt publication.</li>
                    <li>Covered end-to-end app development by demonstrating building of a blog.</li>
                    <li>Course link: https://w3z.in/b6236</li>
                  </ul>
                </div>
                <div class='separator'></div>
                <div class='blockHeader'>
                  <span class='title'>Open source - https://github.com/divyenduz</span>
                  <span class='date'>
                    2011-04 &mdash; Present
                  </span>
                  <ul class='highlights'>
                    <li>Downshift: Contributed a developer-experience feature with test cases to a very widely used React library. Made a collaborator for this PR. (https://w3z.in/f1720)</li>
                    <li>Flask Profiler: Contributed two features (now widely used) to flask profiler library - dump/remove database (https://w3z.in/4b88) and sampling (https://w3z.in/c382)</li>
                    <li>W3Z: Created URL shortener with pluggable affiliate system (https://w3z.in/2c701)</li>
                  </ul>
                </div>
                <div class='separator'></div>
                <div class='blockHeader'>
                  <span class='title'>Ray Wenderlich - Video Team</span>
                  <span class='date'>
                    2016-10 &mdash; Present
                  </span>
                  <ul class='highlights'>
                    <li>I review the meta content of video courses including the scripts, slides, sample code, and projects working with a fully remote team</li>
                    <li>Ray Wenderlich is trusted by millions of developers globally for their high-quality content in both article and video format</li>
                    <li>Key Skills - iOS (Swift) ; Domain - Education</li>
                  </ul>
                </div>
                
              </div>
            </div>
            <div class='sectionLine'></div>
          
            <div id='education' class="sectionBlock">
              <div class='sectionName'>
                <span>EDUCATION</span>
              </div>
              <div class='sectionContent'>
                <div class='educationBlock'>
                  <span class='title'>
                    SMVD University, Jammu, J &amp; K
                  </span>
                  <span class='date'>
                    2009-07 &mdash; 2013-07
                  </span>
                  <div class=''>
                    Bachelor  - Computer Science and Engineering, GPA: 9.09/10 GPA
                  </div>
                </div>
                <div class='separator'></div>
                <div class='educationBlock'>
                  <span class='title'>
                    Coursera
                  </span>
                  <div class=''>
                    MOOC  - Machine Learning by Andrew Ng
                  </div>
                </div>
                
              </div>
            </div>
            <div class='sectionLine'></div>
          
            <div id='skills' class="sectionBlock">
              <div class='sectionName'>
                <span>SKILLS</span>
              </div>
              <div class='sectionContent'>
                <div class='skillBlock'>
                  <span class='title'>Technologies:</span>
                    <span>React, Node, Python, php, MySQL, MongoDB, Redis, GraphQL, Elasticsearch, Hadoop, React Native, Swift</span>
                </div>
                <div class='skillBlock'>
                  <span class='title'>Infrastructure:</span>
                    <span>AWS (EC2,S3,RDS,etc.), DO, Jenkins, Docker, Serverless</span>
                </div>
                <div class='skillBlock'>
                  <span class='title'>Methodologies:</span>
                    <span>Agile</span>, 
                    <span>Kanban</span>, 
                    <span>Scrum</span>
                </div>
              </div>
            </div>
            <div class='sectionLine'></div>
          
            <div id='languages' class="sectionBlock">
              <div class='sectionName'>
                <span>LANGUAGES</span>
              </div>
              <div class='sectionContent'>
                <span class='language'>English (read, write, speak), Spanish (read, write), German (read, write)</span>
                
              </div>
              <div class='sectionLine'></div>
            </div>
          
            <div id='interests' class="sectionBlock">
              <div class='sectionName'>
                <span>INTERESTS</span>
              </div>
              <div class='sectionContent'>
                <span class='name'>Football, Reading, Cooking, Running, Product Development</span><!--
                -->
              </div>
              <div class='sectionLine'></div>
            </div>
          
            </body>
          </html>
          
    `
        }}
      />
    );
  }
}

export default Resume;
