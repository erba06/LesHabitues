import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

const ShopCard = ({ shops }) => {
    return (
        <div>
            <Card className="card-style">
                <CardBody>
                    <CardImg width="45%" src={shops.logo} alt="Card image cap" />
                </CardBody>
                <CardBody>
                    <CardTitle >{shops.name}</CardTitle>
                    <CardSubtitle>{shops.address}</CardSubtitle>
                    <CardText>Up to {shops.maxoffer} € offered</CardText>
                </CardBody>
            </Card>
        </div>

    );
}
export default ShopCard