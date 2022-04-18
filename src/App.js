
import './App.css';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
     <h1>Udeme CV project</h1>
     <Header></Header>
  <p>
  I'm a software developer who works with the Javascript language and i am also familiar with HTML5,CSS and Reactjs
  </p>
  <Skills></Skills>
  <h4>Skills</h4>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
    <li>Nodejs</li>
  </ul>
  <Experience></Experience>
  <h4>Experience</h4>
  <ul>
                <li>
                    
                    <div class="jobinfo">
                        <div class="jobtitle">Internship at Google africa developer scholarship</div> 
                    <div class ="jobdesc">Introduction to html,css and javascript</div>
                    </div>
                </li>
                <li>
                  
                    <div class="jobinfo">
                        <div class="jobtitle">Internship at Tech4dev Women Techsters</div> 
                    <div class ="jobdesc">Software Development</div>
                    </div>
                </li>
                <li>
                
                    <div class="jobinfo">Internship at Try Kibo School</div>
                    <div class="jobdesc">Web Foundations</div>
                </li>
            </ul>
            <h4>Contact Information</h4> 
 <ul>
     <li>
     <div class="data">
                 8 Ogunlana Drive, Surulere.Lagos
            </div>
     </li>
     <li>
     <div class="data">
                +2348111437588
           </div>     
     </li>
     <li>
     <div class="data">
               akpanuwau@gmail.com
            </div>
     </li>
 </ul>
 <h4>Education</h4>
 <div class="education">
                 <ul>
                     <li>University of Uyo
                         <br/>Title of Study : Psychology
                         Date: 2016-2020
                     </li>
                     <li>Queens College</li>
                 </ul>
             </div>
        </div>
    
  );
}

export default App;
