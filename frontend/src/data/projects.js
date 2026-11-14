// Projects shown on the homepage and the /projects page.
// These used to come from the API (posts tagged "project").
// Order matters: the first three also appear on the homepage.
//
// To add a project: import its image and add an object below.
//   slug      – used in the link: /projects/<slug>
//   title     – project name
//   summary   – short description for the cards
//   cover     – image shown on the card and the breakdown page
//   url       – where "View Project" goes (live demo, or the repo if there isn't one)
//   github    – where "View on Github" goes
//   cover can be null: the card shows a purple title panel instead
//   status    – one short line: is it live, in progress, etc.
//
//   The breakdown page (/projects/<slug>) explains the project in plain words:
//   oneLiner  – the whole idea in one sentence
//   problem   – what's wrong today, in plain words
//   steps     – how it works, 3 or 4 short steps: { title, text }
//   why       – why it matters
//   stack     – what it's built with
import dendrite from "../assets/dendrite.webp";
import validateFindings from "../assets/validate-findings.webp";
import trailAnalyzer from "../assets/trailanalyzer.webp";
import piiDetector from "../assets/pii-detector.webp";
import s3Tester from "../assets/s3-tester.webp";
import vulnScanner from "../assets/proj-vuln-scanner.webp";
import rejuvenate from "../assets/proj-rejuvenate.webp";
import dnsAnalyzer from "../assets/dnsanalyze.png";
import blackSniffer from "../assets/scanner.webp";
import insideOut from "../assets/running.gif";

const projects = [
  {
    slug: "dendrite",
    title: "Dendrite: Agentic Offensive Security",
    summary:
      "An AI-orchestrated penetration testing platform. LLM agents plan the attack, deterministic security tools carry it out, a Safety Judge keeps every action in scope, and a Validator reproduces each exploit before it becomes a finding. In active development.",
    cover: dendrite,
    url: "https://pentest.neuroverselab.com",
    github: "https://github.com/iamtoyosee/Agentic-Pentest",
    status: "Front end complete on realistic sample data. Backend orchestration in progress.",
    oneLiner:
      "A team of AI agents that tests a company's systems the way a real attacker would, safely, and only reports the problems it can prove.",
    problem:
      "A penetration test is when someone is hired to break into a company's systems on purpose, so the weak spots get fixed before a real attacker finds them. Good testers are expensive and hard to book, so most companies only get tested once or twice a year. Automated scanners run more often, but they flood teams with alerts, and many of those alerts aren't real.",
    steps: [
      {
        title: "AI agents plan",
        text: "Agents look at what the company has exposed (websites, APIs, cloud accounts) and decide what to try next, like a human tester would.",
      },
      {
        title: "Real tools do the work",
        text: "The agents don't improvise attacks. They call trusted, well-known security tools, so every action is predictable and logged.",
      },
      {
        title: "A Safety Judge watches every step",
        text: "Before any action runs, a separate check makes sure it stays inside the agreed scope. Risky steps pause and wait for a person to approve them, and there's a kill switch.",
      },
      {
        title: "A Validator proves it",
        text: "A finding only counts once an independent agent reproduces the exploit. The team gets a short list of proven problems, with evidence and a suggested fix.",
      },
    ],
    why: "Companies get tested continuously instead of once a year, and engineers spend their time fixing real problems instead of sorting through noise. Every AI decision can be explained, so people stay in control.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express", "LLM agents"],
  },
  {
    slug: "validate-security-findings",
    title: "Validate Security Findings",
    summary:
      "Scanners like Semgrep can return thousands of findings. This tool collapses duplicates and filters out code nobody can reach, leaving the handful of findings that are real and worth an engineer's time.",
    cover: validateFindings,
    url: "https://agentic-validation-view.onrender.com",
    github: "https://github.com/iamtoyosee/Validate-Security-Findings",
    status: "Live demo available. The exploitability step is designed and coming next.",
    oneLiner:
      "It takes a long, noisy list of security warnings and narrows it down to the few that actually matter.",
    problem:
      "Code scanners like Semgrep can report hundreds or thousands of possible bugs in one codebase. Many are the same bug reported several times, and many sit in code that nothing ever runs. Engineers end up triaging a huge list by hand, or they start ignoring it.",
    steps: [
      {
        title: "Scan the code",
        text: "Upload a folder or pick a sample app, and the tool runs Semgrep on it.",
      },
      {
        title: "Remove duplicates",
        text: "When several rules flag the same line, they're grouped into one finding, so the count is real bugs, not rule hits.",
      },
      {
        title: "Check if anyone can reach it",
        text: "The tool maps which functions call which, then works backward from each bug to see if a real entry point (like a web route) can get to it. If it can't tell for sure, it says \"unknown\" instead of guessing.",
      },
      {
        title: "Judge exploitability (next)",
        text: "The planned step: an AI agent reads the code along the path and decides whether an attacker could actually control the dangerous input.",
      },
    ],
    why: "Engineers look at the handful of findings that are real and reachable instead of a thousand rows, so real bugs get fixed faster and people trust the scanner again.",
    stack: ["Python", "FastAPI", "Semgrep", "React", "TypeScript", "Vite", "pytest"],
  },
  {
    slug: "trailanalyzer",
    title: "TrailAnalyzer",
    summary:
      "Who did this: a person, or their AI agent? TrailAnalyzer reads AWS CloudTrail, works out who was really behind each API call, flags where accountability breaks, and suggests IAM fixes.",
    cover: trailAnalyzer,
    url: "https://iamtoyosee.github.io/TrailAnalyzer/",
    github: "https://github.com/iamtoyosee/TrailAnalyzer",
    status: "Web report viewer live with sample data. The CloudTrail analyzer backend is in progress.",
    oneLiner:
      "When something changes in an AWS account, it tells you whether a person did it or an AI agent working for them.",
    problem:
      "AWS keeps a log of every action in an account, called CloudTrail. Now AI coding agents act in AWS using the same permissions as the people they work for, so the log often shows the same name for both. If an agent deletes something or changes permissions, nobody can say who is accountable.",
    steps: [
      {
        title: "Read the log",
        text: "The tool reads CloudTrail events from the account.",
      },
      {
        title: "Look for clues",
        text: "It weighs signals like which program made the call (Claude Code, Cursor, the AWS console), session names, role names and timing, and shows its reasoning for every decision.",
      },
      {
        title: "Label each action",
        text: "Each action gets a label: a person, an agent working for a known person, an agent with no person behind it, ordinary automation, or unknown.",
      },
      {
        title: "Flag gaps and suggest fixes",
        text: "It flags risky patterns, like an agent changing permissions or a person and an agent sharing one role, and suggests IAM policy fixes.",
      },
    ],
    why: "As more work is done by AI agents, companies need to know who did what. This keeps a person accountable for every action in the cloud.",
    stack: ["Python", "AWS CloudTrail", "IAM", "React", "TypeScript", "Vite", "JSON Schema"],
  },
  {
    slug: "pii-detector",
    title: "PII Detector",
    summary:
      "Finds and redacts personal information in text before you share it: support tickets, logs, or prompts headed to an AI assistant. Detection runs in the browser, so the text never leaves the page.",
    cover: piiDetector,
    url: "https://github.com/iamtoyosee/PII-Detector",
    github: "https://github.com/iamtoyosee/PII-Detector",
    status: "Working app with email and phone detectors. More types are on the roadmap.",
    oneLiner:
      "Paste in some text and it highlights the personal information, then blacks it out with one click.",
    problem:
      "People paste support tickets, logs and email threads into chats and AI assistants all the time, and that text often contains someone's email, phone number or card details. Once it's shared, it can't be taken back.",
    steps: [
      {
        title: "Paste or open text",
        text: "Type, paste, or drag in a text file.",
      },
      {
        title: "See it highlighted",
        text: "Each piece of personal information is marked in its own color as you type, with a confidence score.",
      },
      {
        title: "Redact in one click",
        text: "Switch to Redact and every highlight becomes a black bar or a label like [EMAIL]. Copy or download the clean version.",
      },
      {
        title: "Stays private",
        text: "Detection runs in your browser, so the text never leaves the page. You can also point it at your own detection service.",
      },
    ],
    why: "It's an easy habit that stops personal data from leaking before you share anything, including what you send to AI tools.",
    stack: ["TypeScript", "React", "Vite"],
  },
  {
    slug: "s3-tester",
    title: "S3 Tester",
    summary:
      "An AWS S3 pentesting tool that scans an account for misconfigured buckets, flagging the ones that are publicly accessible or have weak permissions. In active development.",
    cover: s3Tester,
    url: "https://github.com/iamtoyosee/s3_tester",
    github: "https://github.com/iamtoyosee/s3_tester",
    status: "In active development.",
    oneLiner:
      "It checks an AWS account for storage buckets that are accidentally open to the internet.",
    problem:
      "Amazon S3 buckets are where companies store files, backups and data. One wrong setting can make a bucket public, and leaked S3 buckets are one of the most common causes of data breaches.",
    steps: [
      {
        title: "Connect to the account",
        text: "Point the tool at an AWS account you're allowed to test.",
      },
      {
        title: "Check every bucket",
        text: "It reviews each bucket's sharing rules: bucket policies, access lists and the Block Public Access setting.",
      },
      {
        title: "Report what's exposed",
        text: "Buckets come back as public, weak or OK, with the reason for each, so you know exactly what to lock down.",
      },
    ],
    why: "It catches the small configuration mistakes that lead to big data leaks before someone else finds them.",
    stack: ["Python", "AWS S3", "boto3"],
  },
  // url points to GitHub for now: vulnscanner.neuroverselab.com currently
  // points to an IP address that is no longer ours.
  {
    slug: "vuln-scanner",
    title: "Vuln Scanner",
    summary:
      "Cloud security dashboard that inspects EC2 instances, checks security groups and scans ports for vulnerabilities.",
    cover: vulnScanner,
    url: "https://github.com/iamtoyosee/VulnScannerFrontend",
    github: "https://github.com/iamtoyosee/VulnScannerFrontend",
    status: "Dashboard front end on GitHub.",
    oneLiner:
      "One dashboard that shows how exposed your AWS servers are.",
    problem:
      "Companies run many virtual servers (EC2 instances) in AWS. Each one has firewall rules, called security groups, and it's easy to leave a port open to the whole internet by mistake. Checking every server by hand takes a long time.",
    steps: [
      {
        title: "Find the servers",
        text: "It lists the EC2 instances in the account.",
      },
      {
        title: "Check the firewall rules",
        text: "It reviews each instance's security groups for rules that are too open.",
      },
      {
        title: "Scan the ports",
        text: "It scans for open ports and shows the results in one dashboard.",
      },
    ],
    why: "It gives a quick picture of where cloud servers are exposed, so the riskiest ones get fixed first.",
    stack: ["React", "Tailwind CSS", "Axios", "AWS EC2"],
  },
  {
    slug: "rejuvenate",
    title: "Rejuvenate",
    summary:
      "E-commerce website for Rejuvenate skincare, with product search, wishlist and cart.",
    cover: rejuvenate,
    url: "https://rejuvenate.neuroverselab.com",
    github: "https://github.com/iamtoyosee/rejuvenate",
    status: "Website.",
    oneLiner: "An online store for a skincare brand.",
    problem:
      "A small skincare brand needed a place to sell online where customers can find products quickly and come back to them later.",
    steps: [
      {
        title: "Browse and search",
        text: "Shoppers browse the products or search for exactly what they need.",
      },
      {
        title: "Save favorites",
        text: "They can add products to a wishlist to come back to later.",
      },
      {
        title: "Add to cart",
        text: "A cart collects everything they want to buy.",
      },
    ],
    why: "It gives a small brand a real storefront and shows the full-stack side of my work, not just security.",
    stack: ["React", "React Router", "Axios", "AWS Cognito", "Serverless"],
  },
  {
    slug: "dns-analyzer",
    title: "Advanced DNS Analyzer",
    summary:
      "This DNS analyzer provides in-depth insight on the state of a DNS infrastructure using AI & ML.",
    cover: dnsAnalyzer,
    url: "https://github.com/iamtoyosee/DNS-Analyzer/tree/main",
    github: "https://github.com/iamtoyosee/DNS-Analyzer/tree/main",
    status: "Command-line tool.",
    oneLiner:
      "It looks up a domain's DNS records and has AI explain what they say about its setup.",
    problem:
      "DNS is the internet's address book: it points a website's name to the servers behind it. DNS records are hard to read at a glance, and mistakes in them can expose a company or break its services.",
    steps: [
      {
        title: "Scan a domain",
        text: "Give it a domain name and it looks up its DNS records, using several threads to go faster.",
      },
      {
        title: "Show the results",
        text: "The records print to the screen and can be saved to a file.",
      },
      {
        title: "Ask AI to explain",
        text: "The results go to ChatGPT, which writes a plain-language analysis of the setup.",
      },
    ],
    why: "It turns raw DNS records into something you can understand quickly.",
    stack: ["Python", "OpenAI API"],
  },
  {
    slug: "sniffer",
    title: "Sniffer",
    summary:
      "Command-line tool written in Rust for scanning open ports on a specified target IP address.",
    cover: blackSniffer,
    url: "https://github.com/iamtoyosee/Sniffer",
    github: "https://github.com/iamtoyosee/Sniffer",
    status: "Command-line tool.",
    oneLiner: "It checks which doors (ports) are open on a computer you're allowed to test.",
    problem:
      "Every service a computer runs listens on a numbered port. An open port nobody knew about is a way in for an attacker, so security teams check which ports are open.",
    steps: [
      {
        title: "Pick a target",
        text: "Give it an IP address and a range of ports to check.",
      },
      {
        title: "Knock on each port",
        text: "It tries to connect to every port at the same time (asynchronously), with a timeout, so it's fast.",
      },
      {
        title: "List what's open",
        text: "Ports that answer are reported as open.",
      },
    ],
    why: "Knowing what's exposed is the first step in securing a machine. Building it in Rust taught me async programming.",
    stack: ["Rust", "Tokio", "Clap"],
  },
  {
    slug: "inside-out",
    title: "Inside Out",
    summary:
      "A command-line tool for performing quick conversions between different data formats.",
    cover: insideOut,
    url: "https://github.com/iamtoyosee/Inside_Out",
    github: "https://github.com/iamtoyosee/Inside_Out",
    status: "Command-line tool.",
    oneLiner: "It converts data between hex, text, decimal and binary from the command line.",
    problem:
      "Security work is full of data in hex (memory dumps, packet captures, encoded payloads). Converting it by hand or in a browser tab is slow.",
    steps: [
      {
        title: "Choose a conversion",
        text: "Pick the type of conversion, like hex to text or decimal to hex.",
      },
      {
        title: "Give it a value",
        text: "Pass in the value you want to convert.",
      },
      {
        title: "Get the result",
        text: "It prints the converted value right in the terminal.",
      },
    ],
    why: "A small tool that saves time on a task security people do constantly.",
    stack: ["Python"],
  },
];

export default projects;
