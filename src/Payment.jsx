import Form from 'react-bootstrap/Form';
import { CCircle } from 'react-bootstrap-icons';
import { useState } from 'react';
import { useEffect, useCallback } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

function Payment() {
    const Swal = require('sweetalert2');

    const [orders, setorders] = useState([]);
    const getOrder = () => {
        fetch('https://653f72d89e8bd3be29e095a1.mockapi.io/order', {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
            .then((data) => data.json())
            .then((order) => setorders(order));
    }
    useEffect(() => getOrder(), []);

    let shipFee = 25000;
    let subtotal = 0;
    orders.map(o => subtotal += o.price * o.quantity);
    let total = subtotal + shipFee;


    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            Swal.fire({
                title: "Order success",
                icon: "success",
                showConfirmButton: false,
                timer: 2000
            });
            event.preventDefault();
        }
        setValidated(true);
    };

    const [paymentMethod, setPaymentMethod] = useState('');

    const handlePaymentChange = useCallback((e) => {
        setPaymentMethod(e.target.value);
    }, []);

    return (
        <>
            <div className="payment-group">
                <img className="payment-card" src="/image/card.png" alt="" />
                <h2 style={{ textAlign: 'center' }}>PAYMENT</h2>
                <p className="payment-para">Please check your information and order before placing an order</p>
            </div>

            <div className="payment-row">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <div className="payment-column">
                        <p className='payment-col-left'>CUSTOMERS INFORMATIONS</p>
                        <div className='payment-customer-information'>

                            <Form.Group controlId='validationCustom01'>
                                <Form.Label htmlFor="inputPassword5">Full name</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                    required
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please fills your name</Form.Control.Feedback>
                            </Form.Group>
                            <br />
                            <Form.Group controlId='validationCustom01'>
                                <Form.Label htmlFor="inputPassword5">Phone</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                    required
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please fills your number phone</Form.Control.Feedback>
                            </Form.Group>
                            <br />
                            <Form.Group controlId='validationCustom01'>
                                <Form.Label htmlFor="inputPassword5">Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                    required
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please fills your address</Form.Control.Feedback>
                            </Form.Group>
                            <br />
                            <Form.Group controlId='validationCustom01'>
                                <Form.Label htmlFor="inputPassword5">Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                    required
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please fills your email</Form.Control.Feedback>
                            </Form.Group>
                            <br />
                            <Form.Group controlId='validationCustom01'>
                                <Form.Label htmlFor="inputPassword5">Zip code</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                    required
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please fills your zip code</Form.Control.Feedback>
                            </Form.Group>
                            <br />
                        </div >
                        <p className='payment-col-left'>PAYMENT METHOD</p>

                        <div className='payment-payment-method'>
                            <Form.Check
                                type="radio"
                                name="paymentMethod"
                                id="pod"
                                label="Payment on delivery"
                                value="pod"
                                onChange={handlePaymentChange}
                                required
                            />
                            <br />
                            <Form.Check
                                type="radio"
                                name="paymentMethod"
                                id="visa"
                                label={
                                    <>
                                        <img
                                            src="/image/payment-method.png"
                                            className="visa-mastercard"
                                            alt=""
                                        />
                                    </>
                                }
                                value="visa"
                                onChange={handlePaymentChange}
                            />
                            <div className='form-visa-1'>
                                <p>
                                    Card number <br />
                                    <Form.Control
                                        type="text"
                                        style={{ width: '100%' }}
                                        className="payment-input-visa"
                                        required={paymentMethod === 'visa'}
                                    />
                                </p>
                                <p>
                                    Expiration date <br />
                                    <Form.Control
                                        type="text"
                                        style={{ width: '70%' }}
                                        className="payment-input-visa"
                                        required={paymentMethod === 'visa'}
                                    />
                                </p>
                            </div>


                            <div className="form-visa-2">
                                <p>
                                    Card holder name <br />
                                    <Form.Control
                                        type="text"
                                        style={{ width: '100%' }}
                                        className="payment-input-visa"
                                        required={paymentMethod === 'visa'}
                                    />
                                </p>

                                <p>
                                    CVV <br />
                                    <Form.Control
                                        type="text"
                                        style={{ width: '50%' }}
                                        className="payment-input-visa"
                                        required={paymentMethod === 'visa'}
                                    />
                                </p>
                            </div>
                            <br />
                            <Form.Check
                                type="radio"
                                name="paymentMethod"
                                id="paypal"
                                label={
                                    <>
                                        <img
                                            src="/image/paypal.png"
                                            className="paypal"
                                            alt=""
                                        />
                                    </>
                                }
                                value="paypal"
                                onChange={handlePaymentChange}
                            />
                            <Form.Check
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before ordering."
                                feedbackType="invalid"
                            />
                            <MDBBtn className='me-1 payment-button-order' type='submit' color='success'>Order</MDBBtn>
                        </div>
                    </div >
                </Form >

                <div className="payment-column">
                    <p className='payment-col-right'>ORDER SUMMARY</p>
                    <div className="payment-order-summary">
                        {
                            orders.map(o => {
                                return (
                                    <div>
                                        <p className='flex-order'>
                                            <img src={o.pic} className='pic-order' alt="" />
                                            <h4>{o.name}</h4>
                                            <h5>x {o.quantity}</h5>
                                        </p>
                                        <p className='price-order'>
                                            <span style={{ textDecoration: "line-through" }}>100.000đ</span><span style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}> {o.price}đ</span>
                                        </p>
                                    </div>
                                )
                            })}

                        <div className='group-total'>
                            <span className='sub-and-ship'>Subtotal</span>
                            <span className='total-price' >
                                {subtotal}đ
                            </span>
                        </div>
                        <div className='group-total'>
                            <span className='sub-and-ship'>Shipping</span>
                            <span className='total-price'>{shipFee}đ</span>
                        </div>
                        <hr />
                        <div className='group-total'>
                            <h4>TOTAL</h4>
                            <p className='final-price'>{total}đ</p>
                        </div>
                    </div>
                </div>
            </div >
            <h4 className='copyright'>COPYRIGHT <CCircle /> BY GROUP 5</h4>
        </>
    );
}

export default Payment;
