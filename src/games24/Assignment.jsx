export const Assignment = (props) =>{
    const {handleClick} = props;

    const cardHeading = 'GST? No Worries!'; 
    const gstNotification = 'Starting 1st October 2023, 28% GST is being charged by Government on your deposits.';
    const gstPaidByRummy = '100% Govt. GST paid by RummyCircle';

    return(
           <div className="box-container">
            <div className="child-box-one">
                <label className="card-heading">{cardHeading}</label>
                <div className="cross-img" onClick={()=>{handleClick(false)}}></div>
            </div>
            <div className="main-box-two">
                <div className="child-box-two">
                    <div className="child-box-div-one">
                        <div className="error-icon">!</div>
                        <label className="heading-two">{gstNotification}</label>
                    </div>
                    <div className="child-box-div-two">
                        <label className="thumb-logo"></label>
                        <label className="heading-three">{gstPaidByRummy}</label>
                    </div>
                </div>
                <div className="child-box-three">
                    <div className="gst-benefit-header">
                        <label className="text-one">GST benefits earned so far</label>
                        <label className="text-two">₹1,10,000</label>
                    </div>
                    <div className="gst-heading">How GST on deposit works?</div>
                    <div className="gst-price-div"> 
                        <label htmlFor="" className="label-text-one">You Pay</label>
                        <label htmlFor="" className="label-text-two">₹1000</label>
                        <label htmlFor="" className="label-text-three">Inclusive of Govt. GST</label>
                    </div>
                    <div className="gst-breakup-div">
                        <div className="left-div">
                            <label className="price-label">₹780</label>
                            <label className="details-label">Goes to your wallet</label>
                        </div>
                        <div className="center-div">
                            <label htmlFor="" className="arrow-left"></label>
                            <label htmlFor="" className="arrow-center"></label>
                            <label htmlFor="" className="arrow-right"></label>
                        </div>
                        <div className="right-div">
                            <label className="price-label">₹220</label>
                            <label className="details-label">Govt. GST on your deposit</label>
                        </div>
                    </div>
                    <div className="child-box-four">
                    <div className="child-box-four-one">
                        <label htmlFor="" className="price-label">₹220</label>
                        <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
                        <label htmlFor="" className="thumb-logo"></label>
                        <label htmlFor="" className="details-label">GST paid by <b>RummyCircle</b></label>
                        </div>
                        <label className="details-label">on your behalf</label>
                    </div>
                    <div className="second-child">
                    <div className="child-box-four-two"></div>
                    </div>
                    <div className="child-box-four-three">
                    <label htmlFor="" className="label-text-one">You Pay</label>
                        <label htmlFor="" className="label-text-two">₹1000</label>
                        <label htmlFor="" className="label-text-three">Inclusive of Govt. GST</label>
                    </div>
                </div>
                </div>
            </div>
           </div>
    )
}