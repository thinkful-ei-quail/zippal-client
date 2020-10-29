import React, {Component} from 'react'

export default class AboutRoute extends Component {
  render(){
    return (
      <>
        <div className='about_container'>
          <h3>Where did it all start?</h3>
          <p>Zip Pal started as an idea to connect people during the hight of Covid 19. Many countries have isolation orders
            in place, restricting what people can do outside of their own homes. These restrictions are meant to slow the
            spread of Covid 19, but unfortunately also have several adverse health risks.
          </p>
          <hr/>
          <h3>The effects of Social Isolation</h3>
          <p>Recent studies show several effects to a persons mental, physical and cognitive health.
            <ul>
              <li>depression</li>
              <li>Poor sleep quality</li>
              <li>Impaired executive function</li>
              <li>accelerated cognitive decline</li>
              <li>poor cardiovascular function</li>
              <li>impaired immunity as every stage of life</li>
            </ul>
            <br/>
            Research shows that the risks of social isolation are very similar to that of 
            <ul>
              <li>obesity</li>
              <li>smoking</li>
              <li>lack of access to care</li>
              <li>physical inactivity</li>
            </ul>
          </p>
        </div>
      </>
    )
  }
}