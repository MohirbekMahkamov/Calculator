import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {


    render() {
        const cars = [{ name: "Cobalt",year:"2011",color:"white", maxSpeed:"200Km/h",from:"Uzbekistan" },
            { name: "Malibu",year:"2016",color:"black", maxSpeed:"220Km/h",from:"Uzbekistan" },
            { name: "Damas",year:"2002",color:"white", maxSpeed:"180Km/h",from:"Uzbekistan" },
            { name: "Nexia 3",year:"2010",color:"blue", maxSpeed:"220Km/h",from:"Uzbekistan" }]
        return (

            <div className={"container"}>
                <div className="row">
                    <div className="col-md-12">
                      <table className={'table'}>
                          <thead>
                          <tr>
                              <th>t/r</th>
                              <th>Name</th>
                              <th>Year</th>
                              <th>color</th>
                              <th>Max Speed</th>
                              <th>From</th>

                          </tr>
                          </thead>
                          <tbody>
                          {
                              cars.map(function (item,index){
                                  return <tr>
                                      <td>{index + 1}</td>
                                      <td>{item.name}</td>
                                      <td>{item.year}</td>
                                      <td>{item.color}</td>
                                      <td>{item.maxSpeed}</td>
                                      <td>{item.from}</td>

                                  </tr>

                              }

                              )
                          }
                          </tbody>


                      </table>

                    </div>

                </div>

            </div>
        );
    }
}


App.propTypes = {};

export default App;