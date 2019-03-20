import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import MissionKey from './MissionKey';
import LaunchItem from './LaunchItem';

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`;

export class Launches extends Component {
  render() {
    return (
      <div>
      <p>SpaceX designs, manufactures and launches advanced rockets and spacecraft. 
      The company was founded in 2002 to revolutionize space technology, 
      with the ultimate goal of enabling people to live on other planets.</p>
      <Fragment>
        <h1 className="display-4 my-3">Launches</h1>
        <MissionKey />
        <Query query={LAUNCHES_QUERY}>
        {({loading, error, data}) => {
                if(loading) return <h4>Loading...</h4>
                if(error) console.log(error);

                return (
                <Fragment>
                    {data.launches.map(launch => (
                            <LaunchItem key={launch.fight_number} launch={launch}/>
                        ))}                    
                </Fragment>
            );
        }}
        </Query>
      </Fragment>
      </div>
    );
  }
}

export default Launches;
