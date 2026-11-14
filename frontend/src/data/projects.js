// Projects shown on the /projects page.
// These used to come from the API (posts tagged "project").
// To add a project: import its image and add an object below.
//   cover   – image shown on the card
//   title   – project name
//   summary – short description
//   url     – where "View Project" goes
//   github  – where "View on Github" goes
// Order matters: the first three also appear on the homepage.
import dendrite from "../assets/dendrite.webp";
import validateFindings from "../assets/validate-findings.webp";
import trailAnalyzer from "../assets/trailanalyzer.webp";
import piiDetector from "../assets/pii-detector.webp";
import s3Tester from "../assets/s3-tester.webp";
import dnsAnalyzer from "../assets/dnsanalyze.png";
import blackSniffer from "../assets/scanner.webp";
import insideOut from "../assets/running.gif";

const projects = [
  {
    title: "Dendrite: Agentic Offensive Security",
    summary:
      "An AI-orchestrated penetration testing platform. LLM agents plan the attack, deterministic security tools carry it out, a Safety Judge keeps every action in scope, and a Validator reproduces each exploit before it becomes a finding. In active development.",
    cover: dendrite,
    url: "https://github.com/iamtoyosee/Agentic-Pentest",
    github: "https://github.com/iamtoyosee/Agentic-Pentest",
  },
  {
    title: "Validate Security Findings",
    summary:
      "Scanners like Semgrep can return thousands of findings. This tool collapses duplicates and filters out code nobody can reach, leaving the handful of findings that are real and worth an engineer's time.",
    cover: validateFindings,
    url: "https://agentic-validation-view.onrender.com",
    github: "https://github.com/iamtoyosee/Validate-Security-Findings",
  },
  {
    title: "TrailAnalyzer",
    summary:
      "Who did this: a person, or their AI agent? TrailAnalyzer reads AWS CloudTrail, works out who was really behind each API call, flags where accountability breaks, and suggests IAM fixes.",
    cover: trailAnalyzer,
    url: "https://iamtoyosee.github.io/TrailAnalyzer/",
    github: "https://github.com/iamtoyosee/TrailAnalyzer",
  },
  {
    title: "PII Detector",
    summary:
      "Finds and redacts personal information in text before you share it: support tickets, logs, or prompts headed to an AI assistant. Detection runs in the browser, so the text never leaves the page.",
    cover: piiDetector,
    url: "https://github.com/iamtoyosee/PII-Detector",
    github: "https://github.com/iamtoyosee/PII-Detector",
  },
  {
    title: "S3 Tester",
    summary:
      "An AWS S3 pentesting tool that scans an account for misconfigured buckets, flagging the ones that are publicly accessible or have weak permissions. In active development.",
    cover: s3Tester,
    url: "https://github.com/iamtoyosee/s3_tester",
    github: "https://github.com/iamtoyosee/s3_tester",
  },
  {
    title: "Advanced DNS Analyzer",
    summary:
      "This DNS analyzer provides in-depth insight on the state of a DNS infrastructure using AI & ML.",
    cover: dnsAnalyzer,
    url: "https://github.com/iamtoyosee/DNS-Analyzer/tree/main",
    github: "https://github.com/iamtoyosee/DNS-Analyzer/tree/main",
  },
  {
    title: "Sniffer",
    summary:
      "Command-line tool written in Rust for scanning open ports on a specified target IP address.",
    cover: blackSniffer,
    url: "https://github.com/iamtoyosee/Sniffer",
    github: "https://github.com/iamtoyosee/Sniffer",
  },
  {
    title: "Inside Out",
    summary:
      "A command-line tool for performing quick conversions between different data formats.",
    cover: insideOut,
    url: "https://github.com/iamtoyosee/Inside_Out",
    github: "https://github.com/iamtoyosee/Inside_Out",
  },
];

export default projects;
