import React from "react";

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white"}
    // )
    // const[btnText, setBtnText] = useState("Enable Dark Mode")
    // const toggleMode = ()=>{
    //     if(myStyle.color === "black"){
    //         setMyStyle({
    //             color: "white",
    //         backgroundColor: "black"
    //     })
    //         setBtnText("Enable Light Mode")
    
    //     }
    //     else{
    //         setMyStyle({
    //         color: "black",
    //         backgroundColor: "white"
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }
    // const contStyle = () =>{
    //     return{
    //         width: "100vw",
    //     height: "100vh"
    // }
    // }
  return (
    <>
 <div className={`container ${props.mode === "dark" ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <div>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" style={{
              backgroundColor: props.mode === "dark" ? "rgb(21, 73, 191)" : "#fff",
              color: props.mode === "dark" ? "#fff" : "#000",
            }}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{
                  backgroundColor: props.mode === "dark" ? "rgb(21, 73, 191)" : "#fff",
                  color: props.mode === "dark" ? "#fff" : "#000",
                }}>
                Features of TextUtilis
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
              style={{
                backgroundColor: props.mode === "dark" ? "rgb(21, 73, 191)" : "#fff",
                color: props.mode === "dark" ? "#fff" : "#000",
              }}>
              <div className="accordion-body" 
               style={{
              backgroundColor: props.mode === "dark" ? "rgb(21, 73, 191)" : "#fff",
              color: props.mode === "dark" ? "#fff" : "#000",
            }}>
                 <ul>
                <li>Convert text to Uppercase</li>
                <li>Convert text to Lowercase</li>
                <li>Convert text to Italic</li>
                <li>Clear your text with a single click</li>
                <li>Preview your text as it appears</li>
              </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={{
                  backgroundColor: props.mode === "dark" ? "rgb(21, 73, 191)" : "#fff",
                  color: props.mode === "dark" ? "#fff" : "#000",
                }}>
                Text Statistics
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
              style={{
                backgroundColor: props.mode === "dark" ? "rgb(21, 73, 191)" : "#fff",
                color: props.mode === "dark" ? "#fff" : "#000",
              }}>
              <div className="accordion-body" style={{
              backgroundColor: props.mode === "dark" ? "rgb(21, 73, 191)" : "#fff",
              color: props.mode === "dark" ? "#fff" : "#000",
            }}>
                <p>TextUtilis provides you with detailed statistics about your text:</p>
              <ul>
                <li>Word Count: Get the number of words in your text.</li>
                <li>Character Count: Know how many characters (including spaces) are in your text.</li>
                <li>Reading Time: Estimate how long it will take to read your text.</li>
              </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={{
                  backgroundColor: props.mode === "dark" ? "rgb(21, 73, 191)" : "#fff",
                  color: props.mode === "dark" ? "#fff" : "#000",
                }}>
               Benefits of Using TextUtilis
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{
              backgroundColor: props.mode === "dark" ? "rgb(21, 73, 191)" : "#fff",
              color: props.mode === "dark" ? "#fff" : "#000",
            }}>
                  <p>TextUtilis is designed to make text manipulation easy and efficient. Here's how it can help:</p>
              <ul>
                <li>Quickly transform text into different formats with just a click.</li>
                <li>Improve productivity with its simple, user-friendly interface.</li>
                <li>Get real-time text statistics to help you optimize your content.</li>
                <li>Perfect for students, writers, and professionals who work with text daily.</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
