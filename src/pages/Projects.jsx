export default function Projects() {
    const projectList = [
      {
        title:"Pen-Testing Lab",
        description: "Created a secure, isolated pen-testing environment using Kali Linux and Metasploitable in VirtualBox. The VM's have been configured with static IP's to allow for controlled experiments. Examples include scanning the target with Nmap, taking advantage of misconfigured TCP ports 512-514, and gaining root access through 'rlogin'. Another method used is generating an SSH key, mounting it to the NFS export and adding it to the root 'authorized_keys' file.",
        tech: "Nmap, msfconsole, Netcat, SSH, TCP/IP",
      },
      {
        title: "Reverse Shell",
        description: "Developed a reverse shell in Python using os.dup2 for remote command execution via TCP. This creates a persistent back door, where the reverse shell automatically spawns on the attacking machine upon target boot up.",
        tech: "Python, Bash, TCP, os.dup2",
      },
      {
        title: "Port Scanner",
        description: "Built a port scanner in Python that scans and logs open TCP ports. The results of each scan are automatically saved to a 'scan_reports' directory along with their timestamps.",
        tech: "Python, Automation, Port Scanning, Socket Library",
      },
      {
        title: "Adversary Emulation",
        description: "Simulated network attacks on port 6667 exploiting the UnrealIRCD IRC daemon on Metasploitable2, as well as exploiting the 'ingreslock' backdoor listening on port 1524.",
        tech: "Nmap, TCP/IP, Remote Code Execution (RCE)",
      },
      {
        title: "Professional Portfolio",
        description: "Developed a professional portfolio from scratch using JavaScript's React library. This portfolio highlights aspirations, technical skills, work experience, and more about my interests beyond my work life.",
        tech: "JavaScript, React, HTML, CSS, Git/GitHub",
      },
    ];
  

  return (
    <div style={{padding: "20px", fontFamily: "Arial, sans-serif"}}>
      <h1 style={{textAlign: "center", marginBottom: "20px"}}>Projects</h1>
      <ul style={{listStyleType: "none", paddingLeft: "0"}}>
        {projectList.map((project, index) => (
          <li key={index} style={{marginBottom: "20px"}}>
            <h2 style={{fontSize: "20px",color: "#800020"}}>{project.title}</h2>
            <p style={{fontSize: "20px"}}>{project.description}</p>
            <p style={{fontSize: "20px"}}><strong>Tech Stack:</strong> {project.tech}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}