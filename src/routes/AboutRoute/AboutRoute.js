import React, {Component} from 'react'
import './AboutRoute.css'

export default class AboutRoute extends Component {
  render(){
    return (
      <>
        <div className='about_container'>
          <h2>Where did it all start?</h2>
          <p>Zip Pal started as an idea to connect people during the hight of Covid 19. Many countries have isolation orders
            in place, restricting what people can do outside of their own homes. These restrictions are meant to slow the
            spread of Covid 19, but unfortunately also have several adverse health risks.
          </p>
          <hr/>
          <h3>The effects of Social Isolation</h3>
          <p>Recent studies show several effects to a persons mental, physical and cognitive health.</p>
            <ul>
              <li>depression</li>
              <li>Poor sleep quality</li>
              <li>Impaired executive function</li>
              <li>accelerated cognitive decline</li>
              <li>poor cardiovascular function</li>
              <li>impaired immunity as every stage of life</li>
            </ul>
            <br/>
            <p>Research shows that the risks of social isolation are very similar to that of :</p>
            <ul>
              <li>obesity</li>
              <li>smoking</li>
              <li>lack of access to care</li>
              <li>physical inactivity</li>
            </ul>
          <hr/>
          <h3>How does Zip Pal help?</h3>
          <p>Having Pen Pals has been shown to improve several aspects of a persons life</p>
          <ul>
            <li>honing reading and writing skills</li>
            <li>encourages prospective-taking</li>
            <li>promotes patience</li>
            <li>fosters interest in social studies</li>
            <li>supports development of social skills</li>
            <li>exposure to new cultures</li>
          </ul>
          <h3>Sources:</h3>
          <ul>
            <li><a href='https://www.apa.org/monitor/2019/05/ce-corner-isolation' target='blank'>American Psychological Association</a></li>
            <li><a href='https://www.verywellfamily.com/benefits-of-having-a-pen-pal-3288504' target='blank'>Benefits of having a Pen Pal</a></li>
            <li><a href='https://www.abeka.com/blog/the-perks-of-pen-pals/' target='blank'>The perks of pen pals</a></li>
          </ul>
        </div>
      </>
    )
  }
}