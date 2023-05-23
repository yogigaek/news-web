import React from "react";
import { Card, Col, Container, Row, InputGroup, FormControl, Alert } from "react-bootstrap";
import { SpinnerDiamond } from 'spinners-react';

export default class ContentNews extends React.Component {
    state = { news: [], search: "", errors: false };

    getData = (key = "all") => {
        this.setState({ loading: true });
        fetch(`https://newsapi.org/v2/everything?apiKey=7f237570bfa444a7b49515ab49db8476&q=${key}`)
            .then((response) => response.json())
            .then((response) => {
                const news = response.articles;
                this.setState({ news, errors: false, loading: false });
            })
            .catch((err) => {
                this.setState({ errors: true, loading: false });
            });
    };

    componentDidMount() {
        this.getData();
    }

    changeHandler = (e) => {
        this.setState({ search: e.target.value });
        this.getData(e.target.value);
    };

    render() {
        const { news, errors, loading } = this.state;

        return (
            <Container>
                <Row className="mt-3">
                    <h1>Latest News DB</h1>
                </Row>
                <Row className="mb-3">
                    <InputGroup>
                        <FormControl
                            placeholder="Search News.."
                            value={this.state.search}
                            onChange={this.changeHandler}
                        />
                    </InputGroup>
                </Row>
                {errors && (
                    <Alert variant="danger" style={{ textAlign: "center" }}>
                        Data No Response !
                    </Alert>
                )}
                {loading ? (
                    <SpinnerDiamond className="spinner" size={90} thickness={180} speed={180} color={"rgba(172, 57, 57, 1)"} secondaryColor={"rgba(0, 0, 0, 0.44)"} />
                ) : (
                    <Row>
                        {news.map((n, i) => (
                            <Col key={i} sm={4} className="mb-3">
                                <Card className="h-100">
                                    <Card.Img variant="top" src={n.urlToImage} />
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title>{n.title}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{n.source.name}</Card.Subtitle>
                                        <Card.Text className="flex-grow-1">{n.description}</Card.Text>
                                        <a href={n.url} className="mt-auto btn btn-primary">
                                            Read More
                                        </a>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">{new Date(n.publishedAt).toDateString()}</Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
        );
    }
}
