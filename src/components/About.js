import React,{useState} from "react";

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor:'white'
    })

    const [Button,SetButton] = useState('Dark Mode')

    const [ButtonStyle,setButtonStyle] = useState({
        backgroundColor: '#0d6efd',
        color:'white'
    })

    const toggleButton = () =>{
        if(myStyle.color == 'white'){
            setMyStyle(
                {
                    color: 'black',
                    backgroundColor:'white'
                }
            )
            SetButton('Dark Mode')
            setButtonStyle(
                {
                    backgroundColor: '#0d6efd',
                    color:'white'
                }
            )
        }
        else{
            setMyStyle(
                {
                    color: 'white',
                    backgroundColor:'black'
                }
            )
            SetButton('Light Mode')
            setButtonStyle(
                {
                    backgroundColor: 'rgb(252, 207, 207)',
                    color:'black'
                }
            )
        }
    }
    return (
        <div className="constainer" style={myStyle}>
            <h1 style={myStyle}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div  className="accordion-item">
                    <h2 className="accordion-header">
                        <button style={ButtonStyle}
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Accordion Item #1
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                    >
                        <div style={myStyle} className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is
                            shown by default, until the collapse plugin adds the appropriate
                            classes that we use to style each element. These classes control
                            the overall appearance, as well as the showing and hiding via CSS
                            transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that just
                            about any HTML can go within the <code>.accordion-body</code>,
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button style={ButtonStyle}
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            Accordion Item #2
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div style={myStyle} className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is
                            hidden by default, until the collapse plugin adds the appropriate
                            classes that we use to style each element. These classes control
                            the overall appearance, as well as the showing and hiding via CSS
                            transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that just
                            about any HTML can go within the <code>.accordion-body</code>,
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button style={ButtonStyle}
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            Accordion Item #3
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div style={myStyle} className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is
                            hidden by default, until the collapse plugin adds the appropriate
                            classes that we use to style each element. These classes control
                            the overall appearance, as well as the showing and hiding via CSS
                            transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that just
                            about any HTML can go within the <code>.accordion-body</code>,
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-2">
            <button className="btn btn-primary" style={ButtonStyle} onClick={toggleButton}>{Button}</button>   
            </div>
        </div>
    );
}
