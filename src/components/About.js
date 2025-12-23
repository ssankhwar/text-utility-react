export default function About(props) {
  let customStyle = {
    color: "white",
    backgroundColor: "black",
    fontSize: "20px",
  };

  if (props.mode === "dark") {
    customStyle = {
      color: "white",
      backgroundColor: "black",
      fontSize: "20px",
    };
  } else {
    customStyle = {
      color: "black",
      backgroundColor: "white",
      fontSize: "20px",
    };
  }

  return (
    <>
      <div className="container my-3" style={customStyle}>
        <h1 className="my-3">About Us</h1>

        <div className="accordion" id="accordionExample">
          <div className="accordion-item my-1">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                style={customStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                About Text Utility App
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={customStyle}>
                Text Utility is a simple yet powerful web application designed
                to help you analyze, format, and manipulate text quickly and
                efficiently. Whether you are a student, developer, content
                writer, or professional, this tool helps you save time by
                performing common text operations in just one click.
              </div>
            </div>
          </div>
          <div className="accordion-item my-1">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={customStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Why Use Text Utility?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={customStyle}>
                With Text Utility, you can easily convert your text to uppercase
                or lowercase, remove unnecessary extra spaces, and instantly
                count words and characters to better analyze your content. The
                app also helps you estimate reading time, clear all text with a
                single click, and preview formatted text in real time, making it
                a simple and efficient tool for everyday text editing and
                analysis.{" "}
              </div>
            </div>
          </div>
          <div className="accordion-item my-1">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={customStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Our Goal
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={customStyle}>
                The goal of Text Utility is to provide a minimal, efficient, and
                distraction-free platform for everyday text processing needs. We
                believe small tools can make a big difference in productivity.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
