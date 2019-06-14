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
        }git

    }
    getPosts = () => {
        axios.get(url)
            .then(res => {
                console.log(res.data.results)
                const shops = res.data.results;
                this.setState({ shops, loading: false });
            })
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