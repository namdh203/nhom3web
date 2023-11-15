import React from 'react';
import RcmCard from './rcm_card';
import { getMdRcmData2, getPopularCountry2 } from '../RcmbodyFunction';

export default class RcmBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tourData: [],
            country_name: "France",
            country_id: 6
        }
    }

    componentDidMount() {
        getPopularCountry2().then(res => {
            const id = res.id;
            this.setState({ 'country_name': res.countryName, 'country_id': res.id }, id => {
                getMdRcmData2(this.state.country_id).then(res => {
                    this.setState({ 'tourData': res })
                }).catch(err => {
                    console.log('error: ' + err)
                })
            });

        }).catch(error => {
            console.error('Error:', error);
        })
    }

    render() {
        console.log(this.state.country_name, this.state.country_id, this.state.tourData)
        return (
            <div className="rcm-block">
                <h2 className="rcm-title">{this.state.country_name}</h2>
                <div className="container-md">
                    <div className='row g-4'>
                        {this.state.tourData.slice(0, 4).map((tour) => (
                            <div className='col col-md-3 col-sm-6'>
                                <RcmCard name={tour.title} desc="Packages" url="/tour/bali-tour" src={tour.demoImage} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}