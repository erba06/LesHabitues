import React from 'react'
import ShopCard from './ShopCard'
import Button from '@material-ui/core/Button';
import axios from 'axios';
let url = `https://www.leshabitues.fr/testapi/shops`


export default class DisplayComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shops: [],
            loading: true
        }
        this.click = this.click.bind(this);
    }
    getPosts = () => {
        axios.get(url)
            .then(res => {
                console.log(res.data.results)
                const shops = res.data.results;
                this.setState({ shops, loading: false });

            })
            .catch((error) => {
                // Error 
                if (error.response) {
                    /*
                     * The request was made and the server responded with a
                     * status code that falls out of the range of 2xx
                     */
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    /*
                     * The request was made but no response was received
                     */
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request and triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
    }

    componentDidMount() {
        this.getPosts()
    }

    click() {
        this.getPosts()
    }

    render() {
        let shops = this.state.shops
        if (this.state.loading) {
            return (
                /** Loader **/
                <div class='dots'>
                    <div class='dot dot--green'></div>
                    <div class='dot dot--yellow'></div>
                    <div class='dot dot--red'></div>
                    <div class='dot dot--blue'></div>
                </div>);
        } else {
            return (
                <div className="my-list container">
                    <h1>My list of shops</h1>
                    <Button className="updateButton" color="primary" variant="contained" size="large" onClick={this.click} disabled={this.state.isLoading}
                    >
                        Update list
                    </Button>
                    <ul>
                        {shops.map((shops) =>
                            <div key={shops.id} className="inline">
                                <ShopCard shops={shops} />
                            </div>
                        )}
                    </ul>
                </div>
            )
        }
    }
}