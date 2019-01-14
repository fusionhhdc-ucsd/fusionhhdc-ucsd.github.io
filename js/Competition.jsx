'use strict';

class Competition extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <NavBar/>
        <Banner/>
        <div
          className='container'
          style={{
            'width': '70%'
          }}
        >
          <h1>
            FUSION XIX
          </h1>
          <p
            style={{
              'font-weight': 'bold'
            }}
          >
            This year’s event info:
          </p>
          <ul>
            <li>
              FUSION Dance Competition (FUSION XIX)
            </li>
            <li>
              Date: April 20th, 2019
            </li>
            <li>
              Location: Golden Hall
            </li>
          </ul>
          <LocationMap/>
        </div>
        <Footer/>
      </div>
      
    );
  }
}

// Render the App.
const dom_container = document.querySelector('#competition-container');
ReactDOM.render(<Competition />, dom_container);