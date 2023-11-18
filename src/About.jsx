import { Facebook, Instagram, Whatsapp } from "react-bootstrap-icons";
import $ from 'jquery';
function About() {
    $(document).ready(function () {
        $(window).scroll(function () {
          if ($(this).scrollTop()>1000) {
           $('#back-top-button').addClass('back-top-button-show');
           $('#back-top-button').removeClass('back-top-button-hide')
          } else {
            $('#back-top-button').removeClass('back-top-button-show');
            $('#back-top-button').addClass('back-top-button-hide');
          }
        })
      })
    return (
        <>
            <div className='about-group-line'>
                <p className='about-line'></p>
                <span className='about-title'>ABOUT</span>
                <p className='about-line'></p>
            </div>
            
            <div>
                <video src="/image/stock-video.mp4" autoPlay loop className="stock-video"></video>
                <img src="/image/logo1.png" width={"20%"} className="about-logo" alt="" />
            </div>
            <img className="about-powder" src="/image/powder.png" alt="" />
            <div className="about-group-1">
                <img className="about-pic-1" src="/image/pic-ex.jpg" alt="" />
                <p className="about-text-1"><h2>Our team</h2>Vero commodi facere placeat odio quaerat ducimus voluptate, illum nulla, quisquam doloremque modi sed dolor maxime eum! Et velit in ab beatae voluptates iure voluptatem fugiat. Ea delectus, cumque dolorum et molestiae rem incidunt, officiis adipisci vitae minima ducimus. Autem, molestias dolores. lorem50 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse temporibus eligendi tempore illum consequuntur impedit minima explicabo commodi. In ullam hic quidem. Earum aliquam incidunt impedit debitis fugiat ab quas eum architecto ea temporibus unde quaerat officiis eveniet explicabo repudiandae quos dolorum dicta sint, dolores at, provident, harum quibusdam rerum officia? At quia, temporibus quas porro veniam quidem tenetur eaque, vero ab voluptate dolorum, qui nemo unde accusamus eos dolorem totam vel mollitia! Sit rem unde dolor optio nemo! Quasi, iste. Vel, beatae eius! Consequatur, quidem alias magnam cumque perspiciatis laudantium ipsa magni? Fuga, sint perspiciatis. Sint minus corporis atque.</p>
            </div>
            <br /><br />
            <div className="about-group-1">     
                <p className="about-text-1"><h2>Our team</h2>Vero commodi facere placeat odio quaerat ducimus voluptate, illum nulla, quisquam doloremque modi sed dolor maxime eum! Et velit in ab beatae voluptates iure voluptatem fugiat. Ea delectus, cumque dolorum et molestiae rem incidunt, officiis adipisci vitae minima ducimus. Autem, molestias dolores. lorem50 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse temporibus eligendi tempore illum consequuntur impedit minima explicabo commodi. In ullam hic quidem. Earum aliquam incidunt impedit debitis fugiat ab quas eum architecto ea temporibus unde quaerat officiis eveniet explicabo repudiandae quos dolorum dicta sint, dolores at, provident, harum quibusdam rerum officia? At quia, temporibus quas porro veniam quidem tenetur eaque, vero ab voluptate dolorum, qui nemo unde accusamus eos dolorem totam vel mollitia! Sit rem unde dolor optio nemo! Quasi, iste. Vel, beatae eius! Consequatur, quidem alias magnam cumque perspiciatis laudantium ipsa magni? Fuga, sint perspiciatis. Sint minus corporis atque.</p>
                <img className="about-pic-1" src="/image/pic-ex.jpg" alt="" />
            </div>
            <br /> <br />
            <div className="about-group-1">
                <img className="about-pic-1" src="/image/pic-ex.jpg" alt="" />
                <p className="about-text-1"><h2>Our team</h2>Vero commodi facere placeat odio quaerat ducimus voluptate, illum nulla, quisquam doloremque modi sed dolor maxime eum! Et velit in ab beatae voluptates iure voluptatem fugiat. Ea delectus, cumque dolorum et molestiae rem incidunt, officiis adipisci vitae minima ducimus. Autem, molestias dolores. lorem50 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse temporibus eligendi tempore illum consequuntur impedit minima explicabo commodi. In ullam hic quidem. Earum aliquam incidunt impedit debitis fugiat ab quas eum architecto ea temporibus unde quaerat officiis eveniet explicabo repudiandae quos dolorum dicta sint, dolores at, provident, harum quibusdam rerum officia? At quia, temporibus quas porro veniam quidem tenetur eaque, vero ab voluptate dolorum, qui nemo unde accusamus eos dolorem totam vel mollitia! Sit rem unde dolor optio nemo! Quasi, iste. Vel, beatae eius! Consequatur, quidem alias magnam cumque perspiciatis laudantium ipsa magni? Fuga, sint perspiciatis. Sint minus corporis atque.</p>
            </div>

            <div className="about-group-forwork">
                <p style={{fontSize:'30px',fontWeight:'bold'}}>For work:</p>
                <p className="about-forwork-icon">
                <Facebook/>
                <Instagram/>
                <Whatsapp/>
                </p>
            </div>
            <div>
                <a href="#"><img src="/image/return-top.png" id='back-top-button' className='back-top-button-hide' alt="Back-to-top" /></a>
            </div>
        </>
    );
}

export default About;