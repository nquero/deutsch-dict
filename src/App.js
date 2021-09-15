import React from 'react';
import dic from './dic.json';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
        };
    }

    componentDidMount() {
        fetch('./dic.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                // const {} = data.feed.entry.reduce(
                //     (result, entry) => {
                //         const title = entry.title;
                //         const [men, women, total] =
                //             entry['cross:DataSet']['cross:Section'][
                //                 'cross:Obs'
                //             ];

                //         result.regions.push(title);
                //         result.men.push(parseInt(men['OBS_VALUE']));
                //         result.women.push(parseInt(women['OBS_VALUE']));
                //         result.total.push(parseInt(total['OBS_VALUE']));
                //         return result;
                //     },
                   // { regions: [], men: [], women: [], total: [] }
                //);

                this.setState({ isLoaded: true });
               
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const { isLoaded } = this.state;

        if (!isLoaded) return <div>Loading...</div>;

        return (
            <Router>
                <Switch>
                    <Route path="/inicio" exact>
                        <div className="chart">
                            {isLoaded }
                        </div>
                    </Route>
                    <Route path="*">
                        <Redirect to="/inicio" />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
