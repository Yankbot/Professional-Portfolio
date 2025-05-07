import Headshot from "../assets/Headshot.png";

export default function Home() {
    return (
        <div style={{textAlign: "center"}}>
            <h1>Yannos Papaevangelou's Professional Portfolio</h1>
            <img src={Headshot} alt="Yannos Papaevangelou Headshot" style={{width: "200px", height: "200px", objectFit: "cover"}} />
            <div style={{marginTop: "1rem"}}>
                <a
                    href="https://github.com/Yankbot"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        margin: "0 1rem",
                        color: "#0072b1",
                        textDecoration: "none",
                        fontSize: "1.3rem",
                    }}
                >
                    Github
                </a>
                <a
                    href="https://www.linkedin.com/in/yannos-papaevangelou-45b56922a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        margin:"0 1rem",
                        color: "#0072b1",
                        textDecoration: "none",
                        fontSize: "1.3rem",
                    }}
                >
                    Linkedin
                </a>
            </div>
        <div style={{marginTop: "20px", textAlign: "left", padding: "0 10px"}}>
            <h1>Education:</h1>
              <div style={{fontSize: "23px"}}>
                <div>B.S. in Cyber Operations, University of Maryland Global Campus (Expected 2026)</div>
                <div style={{ display: "flex", justifyContent: "space-between", maxWidth: "600px" }}>
                    <span>A.A.S. in Cybersecurity, Montgomery College (2024)</span>
                    <span style={{ whiteSpace: "nowrap" }}>GPA: 3.4</span>
                </div>
            </div>
        </div>
            <div style={{marginTop: "20px", textAlign: "left", padding: "0 10px"}}>
                <h1>Certifications:</h1>
                <div style={{ fontSize: "23px" }}>
                    <div>Splunk Core Certified User</div>
                    <div>CompTIA Security+ (Expected June 2025)</div>
                    </div>
                <div/>
            </div>
        </div>
    );
}