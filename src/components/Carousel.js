import React from 'react';

import Card from '../components/Card';

import instagram from '../assets/images/instagram.webp';
import ecofriendly from '../assets/images/ecofriendly.webp';
import opensource from '../assets/images/opensource.webp';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Instagram',
                    subTitle: 'Come along for the journey.',
                    imgSrc: instagram,
                    link: 'https://www.instagram.com/saza_agriculture/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Accessible ecology',
                    subTitle: 'We\'re loyal to the health of our biosphere.',
                    imgSrc: ecofriendly,
                    link: 'https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Open-source',
                    subTitle: 'Our web and mobile presence.',
                    imgSrc: opensource,
                    link: 'https://github.com/aaiiddaann/saza-agriculture',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;