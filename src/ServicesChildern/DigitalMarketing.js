import { useNavigate } from "react-router-dom";

function DigitalMarketing() {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    navigate("/contactus");
  };
  
  return (
    <div className="DigitalMarketing">
      <h1
        style={{
          fontSize: "26px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Digital Marketing
      </h1>
      <p style={{ fontSize: "20px", textAlign: "justify" }}>
        We pride ourselves on being able to provide high quality work at
        affordable prices without sacrificing any quality whatsoever. If you
        want an digital marketing agency that truly cares about your success as
        much as we care about yours then look no further than
        Primateoutsourcing!
      </p>
      <br />

      <h1
        style={{
          fontSize: "26px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Our Services
      </h1>
      <p style={{ fontSize: "20px", textAlign: "justify" }}>
        Whether you’re just getting started with digital marketing or have been
        doing it for years, our services are designed to meet all your goals.
      </p>

      <div className="MarketingServices">
        <div className="card DM-card">
          <div className="card-body">
            <h5
              className="card-title"
              style={{ fontSize: "24px", fontWeight: "bold" }}
            >
              Performance Marketing
            </h5>
            <p className="card1-text">
              Are you looking for a way to increase your sales?
              Primateoutsourcing Digital's Performance Marketing services will
              help you grow your business by increasing conversions, lowering
              costs, and providing real results which matters most.
            </p>
          </div>
        </div>

        <div className="card DM-card">
          <div className="card-body">
            <h5
              className="card-title"
              style={{ fontSize: "24px", fontWeight: "bold" }}
            >
              Search Engine Optimization
            </h5>
            <p className="card-text">
              Not getting organic traffic? We can help your business to achieve
              your marketing goals with our proven SEO services. Our
              tried-and-true SEO techniques ensure that your business will hit
              the top of search engine results.
            </p>
          </div>
        </div>

        <div className="card DM-card">
          <div className="card-body">
            <h5
              className="card-title"
              style={{ fontSize: "24px", fontWeight: "bold" }}
            >
              Social Media Marketing
            </h5>
            <p className="card-text">
              Want to increase brand awareness? Social media marketing is one of
              the best ways to humanize your brand . Primateoutsourcing can help
              you grow your social media presence and increase website traffic
              and brand awarness.
            </p>
          </div>
        </div>

        <div className="card DM-card">
          <div className="card-body">
            <h5
              className="card-title"
              style={{ fontSize: "24px", fontWeight: "bold" }}
            >
              Website Development
            </h5>
            <p className="card-text">
              We at Primateoutsourcing build responsive and SEO friendly
              website. Our design services not only help you in stand out from
              the crowd but also help you in increasing your ROI. We make sure
              to create a unique and striking website for your business.
            </p>
          </div>
        </div>

        <div className="card DM-card">
          <div className="card-body">
            <h5
              className="card-title"
              style={{ fontSize: "24px", fontWeight: "bold" }}
            >
              App Development
            </h5>
            <p className="card-text">
              Developing a mobile app for your business can be broadly split
              into two basic categories - Mobile App Design and Development. Our
              top-notch developers focus on your specifications and requirements
              and offer the most personalized mobile app solutions.
            </p>
          </div>
        </div>

        <div className="card DM-card">
          <div className="card-body">
            <h5
              className="card-title"
              style={{ fontSize: "24px", fontWeight: "bold" }}
            >
              Branding
            </h5>
            <p className="card-text">
              Branding, we create a future where your business and your
              customers interact on the network of emotions through an idealized
              and consistent image with unique value – branded. This approach
              creates your brand’s identity, and this in turn boosts orders adn
              traffic.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />

      <h1
        style={{
          fontSize: "26px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Let our Team of Experts bring value to your Business.
      </h1>
      <p style={{ fontSize: "20px", textAlign: "center" }}>
        We help you save money and time by focusing on what matters – results –
        rather than wasting money.
      </p>

      <button
        className="button1"
        onClick={navigateToContacts}
        style={{
          backgroundColor:"black",
          width:"200px",
          color: "white",
          fontSize: "15px",
          padding: "5px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Free Consultation
      </button>
    </div>
  );
}
export default DigitalMarketing;
