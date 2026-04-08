// Import the official VS Code icons (vsc)
import {
  VscFiles,
  VscSearch,
  VscSourceControl,
  VscExtensions,
  VscAccount,
  VscSettingsGear,
  VscChromeClose,
  VscChevronRight,
  VscChevronDown,
  VscCheck,
  VscWarning,
  VscError,
  VscGitMerge,
  VscJson,
  VscCopilot,
} from "react-icons/vsc";

// Import FontAwesome icons (fa)
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaLinkedin,
  FaFileAlt,
  FaExternalLinkAlt,
  FaCode,
  FaEnvelope,
  FaGraduationCap,
  FaSchool,
  FaMobileAlt,
  FaCheckDouble,
  FaSearch 
} from "react-icons/fa";

export const Icons = {
  // UI Icons (Sidebar size - 24px)
  Files: () => <VscFiles size={24} />,
  Git: () => <VscSourceControl size={24} />,
  Extensions: () => <VscExtensions size={24} />,
  Account: () => <VscAccount size={24} />,
  Bot: () => <VscCopilot size={24} />,
  Settings: () => <VscSettingsGear size={24} />,
  GitHub: () => <FaGithub size={24} />,
  LinkedIn: () => <FaLinkedin size={24} />,
  File: () => <FaFileAlt size={24} />,
  ExternalLink: () => <FaExternalLinkAlt size={24} />,
  Code: () => <FaCode size={24} />,
  Mail: () => <FaEnvelope size={24} />,

  // UI Icons (Small)
  Close: () => <VscChromeClose size={16} />,
  ChevronRight: () => <VscChevronRight size={16} />,
  ChevronDown: () => <VscChevronDown size={16} />,
  Check: () => <VscCheck size={16} color="#89d185" />,
  Warning: () => <VscWarning size={16} color="#cca700" />,
  Error: () => <VscError size={16} color="#f48771" />,
  Branch: () => <VscGitMerge size={14} />,
  School: () => <FaSchool size={16} />,
  Graduation: () => <FaGraduationCap size={16} />,
  Mobile: () => <FaMobileAlt size={16} />,
  CodeSmall: () => <FaCode size={16} />,
  CheckMark: () => <FaCheckDouble size={16} />,
  Search: () => <FaSearch size={16} />,

  // File Type Icons (Tab size - 16px)
  ReactIcon: () => <FaReact size={16} color="#61dafb" />,
  HtmlIcon: () => <FaHtml5 size={16} color="#e34c26" />,
  CssIcon: () => <FaCss3Alt size={16} color="#264de4" />,
  JsIcon: () => <FaJs size={16} color="#f7df1e" />,
  JsonIcon: () => <VscJson size={16} color="#a5a5a5" />,
  GitSmall: () => <VscSourceControl size={16} />,

  // Small Extension icon for the file tab
  ExtensionTabIcon: () => <VscExtensions size={16} color="#4fc1ff" />,
};
