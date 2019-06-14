import React from 'react'
import ShopCard from './ShopCard'
import axios from 'axios';
let url = `https://www.leshabitues.fr/testapi/shops`


export default class DisplayComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shops: [],
            loading: true
        }
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

    render() {
        let shops = this.state.shops
        if (this.state.loading) {
            return (
                /** Loader **/
                <div class='loader'>
                    Loading...
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