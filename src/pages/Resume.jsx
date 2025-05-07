export default function Resume() {
    return (
    <div style={{textAlign: "center", padding: "2rem"}}>
        <h1>Resume</h1>
        <a
            href="/resume.pdf"
            download
            style={{
                display: "inline-block",
                padding: "0.75rem 1.5rem",
                backgroundColor: "#800020",
                color: "white",
                textDecoration: "none",
                borderRadius: "8px",
                fontSize: "1.1rem",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
            
        >
            Download Yannos' Resume
        </a>
        <div style={{textAlign: "center", fontSize: "20px"}}>
            <h2 style={{fontWeight: 200}}> Professional Overview</h2>
            <p style={{maxWidth: "700px", margin: "0 auto", fontWeight: 300, fontSize: "19px"}}>
             Aspiring Red Team cybersecurity professional with hands-on lab experience, real world exposure supporing a scientific federal environment, and an ambition for highly technical offsec skills. I am aiming for a technical role or internship where I can apply and expand my skills in pen-testing, adversary emulation, and threat detection. I also want to sharpen my skills in explolit developement. I actively build tools, simulate attacks, and analyze network behaviors in my home lab to sharpen my edge. Passionate about obtaining a role that challenges, teaches, pushes my technical limits, and allows me to contribute to a high-performing cybersecurity team.
            </p>
        </div>
        <div style={{textAlign: "left", marginTop: "3rem", fontSize: "20px"}}>
            <h3 style={{textAlign: "left", fontSize: "25px", fontWeight: "200",}}>Technical Skills</h3>
            <ul style={{fontSize: "19px", padding: "1rem", marginTop: "-2rem"}}>
                <li><strong>Languages:</strong> Python, Bash, Powershell, JavaScript JSX</li>
                <li><strong>Operating Systems:</strong> Windows, Kali Linux, MacOS</li>
                <li><strong>Networking & Protocols:</strong> DNS, TCP/IP, VLAN, VPN </li>
                <li><strong>Security Tools:</strong> Metasploit, Nmap, Wireshark, Splunk</li>
                <li><strong>Security Concepts:</strong> IAM, Vulnerability Management, Log Analysis, SIEM</li>
            </ul>
        </div>
        
    </div>
    );
}

