    import './App.css';
    import {Navbar, Nav, Container} from "react-bootstrap";
    function NavBar () {
        return (
            <Navbar expand="lg" bg="primary" variant="dark" className="static-top">
                <Container className="p-3">
                    <Navbar.Brand href="">
                        <img src="http://chupein.com/images/hhlogo.gif" alt="Happy Harry's Hardware" height="65"/>
                    </Navbar.Brand>
                    <h4 className="text-center text-light mx-auto mb-0">Happy Harry's Hardware</h4>
                    <Nav className="ms-auto align-items-center">
                        <Nav.Item className="p-1">
                            <Nav.Link href="/" className="btn btn-warning" role="button">
                                Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="p-1">
                            <Nav.Link href="/CustomerPage" className="btn btn-warning" role="button">
                                Customers
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="p-1">
                            <Nav.Link href="/ProductsPage" className="btn btn-warning" role="button">
                                Products
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="p-1">
                            <Nav.Link href="/SalesPage" className="btn btn-warning" role="button">
                                Sales
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        );
    }

    export default NavBar;