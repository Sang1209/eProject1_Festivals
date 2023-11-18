import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from 'react';
import { useNavigate,Link,Routes,Route } from 'react-router-dom';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBRipple, MDBSpinner, MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Collapse from 'react-bootstrap/Collapse';
import $ from 'jquery';
import Books from './Books';

function Home() {

    const [books, setbooks] = useState([]);
    const showBooks = () => {
        fetch("https://653f72d89e8bd3be29e095a1.mockapi.io/books")
            .then((data) => data.json())
            .then((books) => setbooks(books));
    }
    useEffect(() => showBooks(), []);


    const [slides, setslides] = useState([]);
    const showSlide = () => {
        fetch("https://653f52049e8bd3be29e04275.mockapi.io/carosel")
            .then((data) => data.json())
            .then((slide) => setslides(slide));
    }

    useEffect(() => showSlide(), []);

    // const [searchTerm, setsearchTerm] = useState('');
    // const result = books.filter(book => book.name == searchTerm || book.price == searchTerm)

    const [open, setOpen] = useState(false);
    const show = 'More';
    const hide = 'Hide';
    const [button_show_hide, setbutton_show_hide] = useState(show);
    const func_show_hide = () => {
        setOpen(!open);
        if (button_show_hide == show) {
            setbutton_show_hide(hide);
        } else {
            setbutton_show_hide(show);
        }
    }

    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 1000) {
                $('#back-top-button').addClass('back-top-button-show');
                $('#back-top-button').removeClass('back-top-button-hide')
            } else {
                $('#back-top-button').removeClass('back-top-button-show');
                $('#back-top-button').addClass('back-top-button-hide');
            }
        })
    })
    const navigate=useNavigate();

    return (
        <>
            <div className="home-loading">
                <p><MDBSpinner role='status' color='secondary'></MDBSpinner></p>
                <p>Loading...</p>
            </div>

            <Carousel className='home-slide' data-bs-theme="white">
                {
                    slides.map(s => {
                        return (
                            <Carousel.Item interval={3000}>
                                <img
                                    className="d-block w-100"
                                    src={s.pic}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>FESTIVAL</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>


            <br />
            <div className='home-group-line'>
                <p className='home-line'></p>
                <span className='home-title'>FESTIVALS</span>
                <p className='home-line'></p>
            </div>

            <p className='home-content-festival'>Lunar New Year or Tết Nguyên Đán, is Vietnam’s most significant celebration. Across Vietnam, during this time families reunite and honour their ancestors, while praying for luck, prosperity and health in the new year. The public holiday may only run for one week, but in reality, Tết celebrations last much longer. If you’re visiting Vietnam around Lunar New Year, here’s what you can expect. </p>
            <img src="/image/Tet1.jpg" className='home-pic-festival' alt="" />
            <p className="home-content-festival">Tết marks the first day of the Lunar New Year, and the beginning of spring in the North of Vietnam. The holiday traces back to the early days of Vietnamese settlements in the Red River Delta, when Tết meant a new cycle of wet rice cultivation. Today, the meaning of the holiday runs much deeper than its farming roots: Vietnamese culture emphasises the importance of a fortuitous fresh start, surrounded by family and loved ones.</p>

            <Collapse in={open}>
                <div id="example-collapse-text">
                    <img src="/image/Tet2.jpg" alt="" className="home-pic-festival" />
                    <p className="home-content-festival">Throughout Vietnam, preparations for Tết begin weeks in advance, as cleaning, decorating, and sprucing up is a big part of the holiday tradition. Vietnamese shop for new clothes, get haircuts, cook special dishes, buy flowers, and even wash their motorcycles. Each home and office will decorate with signs of ‘Chúc Mừng Năm Mới’, and kumquat trees or peach blossoms will be set in a place of honour. The bigger the kumquat trees, the more prosperity and health the family will receive in the new year. Streets burst with colour as these trees are transported on the back of motorbikes. In anticipation of the long holiday, a festive spirit takes hold of the country. </p>
                    <img src="/image/Tet3.jpg" alt="" className="home-pic-festival" />
                    <p className="home-content-festival">In the days before Tết, markets and streets are jam-packed with shoppers. Busy housewives pick up foil, paper garlands, and auspicious red and gold decorations shaped like fish, coins, firecrackers, and blossoms. Each lunar year is represented by a zodiac animal, as reflected in glossy stickers or on paper lanterns. Locals bring home stacks of red bao lì xì - lucky money envelopes - which are customarily gifted by elders to younger members of the family, or by managers to employees. It’s a sign of maturity for young Vietnamese to stop receiving lì xì and start giving it instead. </p>
                    <img src="/image/Tet4.jpg" alt="" className="home-pic-festival" />
                    <p className="home-content-festival">Food -- especially the Tết cake bánh chưng -- is an important component of the celebrations. According to folklore, the last Hùng King could not decide which of his sons would take the throne, so he held a competition to find which son could bring him the best dish in the world. One son stood out, as he presented these two savoury rice cakes representing heaven and earth. These humble dishes impressed the king who then awarded him the throne. Across Vietnam, families will sit down to a day-long feast, and present candied fruits in beautiful boxes for guests to enjoy.</p>
                </div>
            </Collapse>

            <div className='home-button-more'>
                <a
                    onClick={func_show_hide}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >{button_show_hide} </a>

            </div>
            <hr />


            <div className='home-group-line'>
                <p className='home-line'></p>
                <span className='home-title'>BOOKS</span>
                <p className='home-line'></p>
            </div>

            <div className='home-book-list'>
                {books.map(b => {
                    return (
                        <MDBCard>
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage src={b.pic} width={'200px'} fluid alt='...' />
                                <a>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                </a>
                            </MDBRipple>
                            <MDBCardBody>
                                <MDBCardTitle>{b.name}</MDBCardTitle>
                                <MDBCardText>
                                    <span style={{ textDecoration: "line-through" }}>100.000đ</span><span style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}> {b.price}</span>
                                </MDBCardText>
                                <MDBBtn href='#'>Buy</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    )
                })}
            </div>

            <div className="home-button-seeall">
           <Link to='/books'>See all</Link>
            </div>

            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="facebook-f" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="twitter" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="instagram" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="linkedin" />
                        </a>
            
                    </div>
                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon icon="gem" className="me-3" />
                                    FESTIVALS
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                </p>
                            </MDBCol>


                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <MDBIcon icon="home" className="me-2" />
                                   590 CMT8, Ward 11,District 3,Ho Chi Minh City
                                </p>
                                <p>
                                    <MDBIcon icon="envelope" className="me-3" />
                                    info.festival@company.com
                                </p>
                                <p>
                                    <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                                </p>
                                <p>
                                    <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                                </p>
                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>MAP</h6>
                                <p>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3241408037143!2d106.66363250998626!3d10.786467189318513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ecb37e59e33%3A0xfe7c4d9f94f9e079!2zNTkwIMSQLiBDw6FjaCBN4bqhbmcgVGjDoW5nIDgsIFBoxrDhu51uZyAxMSwgUXXhuq1uIDMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCA3MDAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1700204272197!5m2!1svi!2s" width="300" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2023 Copyright by GROUP 5
                </div>
            </MDBFooter>

            <div>
                <a href="#"><img src="/image/return-top.png" id='back-top-button' className='back-top-button-hide' alt="Back-to-top" /></a>
            </div>

            <Routes>
                <Route path="/books" element={<Books/>}/>
            </Routes>
        </>
    );
}

export default Home;