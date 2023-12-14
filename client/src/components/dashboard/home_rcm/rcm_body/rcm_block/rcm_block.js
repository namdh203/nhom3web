import React from 'react';
import RcmCard from './rcm_card';
import { getMdRcmData, getPopularCountry } from '../RcmbodyFunction';

export default class RcmBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tourData: [],
            country_name: "France",
            countryId: 10
        }
    }

    componentDidMount() {
        getPopularCountry().then(res => {
            this.setState({ 'country_name': res.countryName, 'countryId': res.id }, () => {
                getMdRcmData(this.state.countryId, this.props.type).then(res => {
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
        return (
            <div className="rcm-block">
                <h2 className="rcm-title">{this.state.country_name}</h2>
                <div className="container-md">
                    <div className='row g-4'>
                        {this.state.tourData.slice(0, 4).map((tour) => (
                            <div className='col col-md-3 col-sm-6 col-12'>
                                <RcmCard id = {tour.id} name={tour.title} src={tour.demoImage} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}