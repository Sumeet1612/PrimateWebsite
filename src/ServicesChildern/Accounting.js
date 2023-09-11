function Accounting() {
  return (
    <div className="Accounting">
      <h5
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Our Financial Services
      </h5>
      <marquee scrollamount="20" onMouseOver={(e) =>{e.target.stop()}} >
        {/* onMouseOut={(e) =>{e.start()}} */}
        <div className="FinancialServices">
          <div className="slide-card">
            <div>
              <span>Setting up Offshore Companies</span>
            </div>
          </div>

          <div className="slide-card">
            <div>
              <span>RBI, FEMA & FOREX Law Compliances</span>
            </div>
          </div>

          <div className="slide-card">
            <div>
              <span>Business setup in India</span>
            </div>
          </div>

          <div className="slide-card">
            <div>
              <span>Company Formation & Secretarial Complaince</span>
            </div>
          </div>

          <div className="slide-card">
            <div>
              <span>CPA Book Keeping</span>
            </div>
          </div>

          <div className="slide-card">
            <div>
              <span>Payable Accounting</span>
            </div>
          </div>

          <div className="slide-card">
            <div>
              <span>Income Tax, GST, Excise</span>
            </div>
          </div>

          <div className="slide-card">
            <div>
              <span>TDS, Monthly, Annual Compliance</span>
            </div>
          </div>

          <div className="slide-card">
            <div>
              <span> Payroll Processing</span>
            </div>
          </div>

          <div className="slide-card">
            <div>
              <span>International Taxation & Transfer Pricing</span>
            </div>
          </div>

          <div className="slide-card">
            <div>
              <span>Corporate Finance</span>
            </div>
          </div>

          <div className="slide-card">
            <div>
              <span>Setup Xero/Quickbook etc.</span>
            </div>
          </div>
        </div>
      </marquee>
    </div>
  );
}
export default Accounting;
