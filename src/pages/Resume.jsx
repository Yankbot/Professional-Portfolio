export default function Resume() {
    return (
    <div style={{textAlign: "center", padding: ".5rem"}}>
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
             Aspiring Red Team cybersecurity professional with hands-on lab experience and real-world exposure supporting a scientific federal environment. Eager to secure a technical role or internship in penetration testing, adversary emulation, or threat detection. Yannos actively develops tools, simulates attacks, and analyzes network behavior in a personal lab environment to deepen offensive security skills. Passionate about contributing to a high-performing cybersecurity team that challenges, sharpens expertise, and pushes technical limits—especially in exploit development.
            </p>
        </div>
        <div style={{textAlign: "left", marginTop: "3rem", fontSize: "20px"}}>
            <h3 style={{textAlign: "left", fontSize: "25px", fontWeight: "200",}}>Technical Skills</h3>
            <ul style={{fontSize: "19px", padding: "1rem", marginTop: "-2rem"}}>
                <li><strong>Languages:</strong> Python, Bash, PowerShell, JavaScript (JSX)</li>
                <li><strong>Operating Systems:</strong> Windows, Kali Linux, macOS</li>
                <li><strong>Networking & Protocols:</strong> DNS, TCP/IP, VLANs, VPNs </li>
                <li><strong>Security Tools:</strong> Metasploit, Nmap, Wireshark, Splunk</li>
                <li><strong>Security Concepts:</strong> Identity & Access Management (IAM), Vulnerability Management, Log Analysis, SIEM</li>
            </ul>
        </div>
        <div style={{textAlign:"left", marginTop: "3rem"}}>
            <h3 style={{textAlign: "left", fontSize: "25px", fontWeight: "200",}}>Professional Experience</h3>
            <div style={{marginBottom: "2rem"}}>
                <h4 style={{fontSize: "20px", marginBottom: "0.2rem"}}>
                    IT Technician (Contractor) – National Institutes of Health (NIMH & NIDDK)</h4>
                    <p style={{fontSize:"20px", fontStyle: "italic", marginTop: "0", marginBottom: "0.5rem" }}>June 2024 – Present</p>
            <ul style={{fontSize: "18px", paddingLeft: "1.5rem"}}>
                <li>Monitoring and troubleshooting endpoint network connectivity, managing user access and permissions via Active Directory, and ensuring compliance with internal security policies.</li>
                <li>Implementing endpoint security measures using Group Policy, improving compliance across 500+ systems.</li>
                <li>Resolving 25+ incidents weekly in alignment with SLAs to maintain system availability and support vulnerability management.</li>
                <li>Troubleshooting certificate authentication issues with Kerberos and Microsoft products.</li>
            </ul>
        </div>
        <div>
            <h4 style={{ fontSize: "20px", marginBottom: "0.2rem" }}>Desktop Support Specialist (Contractor) – Telaforce LLC</h4>
            <p style={{fontSize:"20px", fontStyle: "italic", marginTop: "0", marginBottom: "0.5rem" }}>June 2022 – March 2023</p>
            <ul style={{ paddingLeft: "1.5rem", fontSize: "18px" }}>
                <li>Diagnosed and resolved hardware and firmware issues across multiple county departments, ensuring consistent endpoint performance.</li>
                <li>Upgraded BitLocker encryption from AES 128-bit to 256-bit to enhance data protection.</li>
                <li>Conducted software patching and system updates to support vulnerability mitigation and compliance.</li>
                <li>Trained end users on security best practices and system functionality.</li>
        </ul>
        </div>
    </div>
    </div>
    );
}

