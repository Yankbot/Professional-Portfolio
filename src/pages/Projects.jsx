export default function Projects() {
    const projectList = [
      {
        title:"Pen-Testing Lab",
        description: "Created a secure, isolated penetration testing environment using Kali Linux and Metasploitable on VirtualBox. Configured with static IP's to allow for controlled experiments and vulnerability assessments.",
        tech: "Kali Linux, Metasploit (msfconsole), Bash, TCP/IP",
      },
      {
        title: "Reverse Shell",
        description: "Developed a Python-based reverse shell using os.dup2 for remote command execution over TCP. Designed to establish a persistent back door that activates automatically on target boot.",
        tech:  "Python, Bash, TCP, os.dup2"
      },
      {
        title: "Port Scanner",
        description: "Built an automated Python script to scan and log open TCP ports. Each scan result is timestamped and saved to a dedicated 'scan_reports' directory.",
        tech: "Python, Sockets, Automation, Port Scanning",
      },
      {
        title: "Adversary Emulation",
        description: "Executed Nmap scans, and exploited misconfigured TCP ports (512-514) to gain root access via 'rlogin'. Also leveraged NFS exports to inject SSH keys into the root 'authorized_keys' file. Simulated attacks on UnrealIRCD (port 6667) and the ingreslock backdoor (port 1524) on Metasploitable2.",
        tech: "Nmap, TCP/IP, Remote Code Execution (RCE)",
      },
      {
        title: "Professional Portfolio",
        description: "Designed and developed a responsive portfolio website using React to showcase skills, projects, and career goals. Includes personal insights, technical experience, and live project examples. Deployed using GitHub Pages.",
        tech: "JavaScript, React, HTML, CSS, Git/GitHub",
      },
    ];
  

  return (
    <div style={{padding: "20px", fontFamily: "Arial, sans-serif"}}>
      <h1 style={{textAlign: "center", marginBottom: "20px", padding:"0rem", fontSize: "25px"}}>Projects</h1>
      <ul style={{listStyleType: "none", paddingLeft: "0"}}>
        {projectList.map((project, index) => (
          <li key={index} style={{marginBottom: "20px"}}>
            <h2 style={{fontSize: "22px", fontWeight: "200", color: "#800020"}}>{project.title}</h2>
            <p style={{fontSize: "18px"}}>{project.description}</p>
            <p style={{fontSize: "18px"}}><strong>Tech Stack:</strong> {project.tech}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}