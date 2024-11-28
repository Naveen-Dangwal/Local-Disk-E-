
import { GoArrowRight } from "react-icons/go";
import { FaUser } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";




function App() {
  return (
    <>
      <div className="div1" style={{marginTop: "35px",marginLeft:"140px"}}>
        <h1>Accelerate growth-for you and your organization</h1>
        <p>
          Reach goals faster with one of our plans or programs. Try one free
          today or contact sales to learn more.
        </p>
      </div>

      <div className="div2" style={{marginTop: "40px",height:"82%",display:"flex",marginLeft:"140px"}}>
        
        <div className="card" style={{width:"28rem",height:"40rem"}}>
          <div className="card-body">
            <h5 className="card-title">Personal Plan</h5>
            <p className="card-subtitle mb-2 text-body-secondary">
           
            For You
            </p>
            <p className="card-subtitle mb-2 text-body-secondary">
            <FaUser/>  <span style={{marginLeft:"10px"}}>Individual</span>
            </p>
            <h5 className="card-title" style={{marginTop:"40px"}}>Starting at 850 per month</h5>
            <p className="card-subtitle mb-2 text-body-secondary">
              Billed monthly or annually.Cancel anytime.
            </p>

            <button type="button" className="btn btn-dark" style={{marginTop:"10px",width:"100%",borderRadius:"0px",padding:"10px"}}>Start Subscription <GoArrowRight />


            </button>
            <p className="card-text" style={{marginTop:"20px"}}>
              <p><FaCheckCircle /><span style={{marginLeft:"20px"}}>Access 12,000+ top courses</span> </p>
              <p><FaCheckCircle /><span style={{marginLeft:"20px"}}>Certification prep</span> </p>             
              <p><FaCheckCircle /><span style={{marginLeft:"20px"}}>Goal-focused recommendations</span> </p>
              <p><FaCheckCircle /><span style={{marginLeft:"20px"}}>AI-powered coding exercises</span> </p>
            </p>

          </div>
        </div>


        <div className="card" style={{width:"28rem",height:"40rem",marginLeft:"15px"}}>
          <div className="card-body">
            <h5 className="card-title">Team Plan</h5>
            <p className="card-subtitle mb-2 text-body-secondary">
           
            For your team
            </p>
            <p className="card-subtitle mb-2 text-body-secondary">
            <IoMdPersonAdd /><span style={{marginLeft:"10px"}}>2 to 20 people</span>
            </p>
            <h5 className="card-title" style={{marginTop:"40px"}}>₹1,167 a month per user</h5>
            <p className="card-subtitle mb-2 text-body-secondary">
            Billed annually. Cancel anytime.
            </p>

            <button type="button" className="btn btn-dark" style={{marginTop:"10px",width:"100%",borderRadius:"0px",padding:"10px"}}>Start Subscription <GoArrowRight />


            </button>
            <p className="card-text" style={{marginTop:"20px"}}>
              <p><FaCheckCircle /><span style={{marginLeft:"20px"}}>Access 12,000+ top courses</span> </p>
              <p><FaCheckCircle /><span style={{marginLeft:"20px"}}>Certification prep</span> </p>             
              <p><FaCheckCircle /><span style={{marginLeft:"20px"}}>Goal-focused recommendations</span> </p>
              <p><FaCheckCircle /><span style={{marginLeft:"20px"}}>AI-powered coding exercises</span> </p>
              <p><FaCheckCircle /><span style={{marginLeft:"20px"}}>Analytics and adoption reports</span> </p>

            </p>

          </div>
        </div>

        <div className="card" style={{width:"30rem",height:"40rem",marginLeft:"15px"}}>
          <div className="card-body">
            <h5 className="card-title">Enterprise Plan</h5>
            <p className="card-subtitle mb-2 text-body-secondary">
           
            For your whole organization
            </p>
            <p className="card-subtitle mb-2 text-body-secondary">
            <IoMdPersonAdd /><span style={{marginLeft:"10px"}}>More than 20 people</span>
            </p>
            <h5 className="card-title" style={{marginTop:"40px"}}>Contact sales for pricing</h5>

            <button type="button" className="btn btn-dark" style={{marginTop:"38px",width:"100%",borderRadius:"0px",padding:"10px"}}>Request a Demp <GoArrowRight />


            </button>
            <p className="card-text" style={{marginTop:"20px"}}>
              <p><FaCheckCircle /><span style={{marginLeft:"20px"}}>Access to 27,000+ top courses</span> </p>
              <p><FaCheckCircle /><span style={{marginLeft:"20px"}}>Certification prep</span> </p>             
              <p><FaCheckCircle /><span style={{marginLeft:"20px"}}>Goal-focused recommendations</span> </p>
              <p><FaCheckCircle /><span style={{marginLeft:"20px"}}>AI-powered coding exercises</span> </p>
              <p><FaCheckCircle /><span style={{marginLeft:"20px"}}>Advanced analytics and insights</span> </p>
              <p><FaCheckCircle /><span style={{marginLeft:"20px"}}>Dedicated customer success team</span> </p>
              <p><FaCheckCircle /><span style={{marginLeft:"20px"}}>International course collection featuring 15 languages</span> </p>
              <p><FaCheckCircle /><span style={{marginLeft:"20px"}}>Customizable content</span> </p>
              <p><FaCheckCircle /><span style={{marginLeft:"20px"}}>Hands-on tech training with add-on</span> </p>
            </p>

          </div>
        </div>




      </div>
    </>
  );
}

export default App;
