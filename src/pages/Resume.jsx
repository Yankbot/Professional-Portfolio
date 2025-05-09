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
        <div style={{textAlign: "center", fontSize: "18px"}}>
            <h2 style={{fontWeight: 200}}> Professional Overview</h2>
            <p style={{maxWidth: "700px", margin: "0 auto", fontWeight: 300, fontSize: "19px", marginTop: "-.5rem"}}>
             Aspiring Red Team cybersecurity professional with hands-on lab experience and real-world exposure supporting a scientific federal environment. Eager to secure a technical role or internship in penetration testing, adversary emulation, or threat detection. I actively develop tools, simulate attacks, and analyze network behavior in a personal lab environment to deepen offensive security skills. Passionate about contributing to a high-performing cybersecurity team that challenges me, sharpens my expertise, and pushes my technical limits—especially in exploit development.
            </p>
        </div>
        <div style={{textAlign: "left", marginTop: "3rem", fontSize: "20px"}}>
            <h3 style={{textAlign: "left", fontSize: "25px", fontWeight: "200",}}>Technical Skills</h3>
            <ul style={{fontSize: "19px", padding: "1rem", marginTop: "-2rem"}}>
                <li><strong>Languages:</strong> Python, Bash, PowerShell, JavaScript (JSX)</li>
                <li><strong>Operating Systems:</strong> Windows, Kali Linux, macOS</li>
                <li><strong>Networking & Protocols:</strong> DNS, TCP/IP, VLANs, VPNs </li>
                <li><strong>Security Tools:</strong> Metasploit, Nmap, Wireshark, Splunk</li>
                <li><strong>Security Concepts:</strong> Identiy & Access Management (IAM), Vulnerability Management, Log Analysis, SIEM</li>
            </ul>
        </div>
        
    </div>
    );
}

