import { TubeLightNavBar } from "./ui/tubelight-navbar";
import { House, BriefcaseBusiness, FolderGit2, Star } from "lucide-react";

const firstName = "Bilal";
const NavLinks = [
  { id: 1, name: "Home", url: "/#Hero", icon: House },
  { id: 2, name: "Experience", url: "/#Experience", icon: BriefcaseBusiness },
  { id: 3, name: "Work", url: "/#Work", icon: FolderGit2 },
  { id: 4, name: "Reviews", url: "/#Testimonials", icon: Star },
];

const Navbar = () => {
  return <TubeLightNavBar items={NavLinks} firstName={firstName} />
}

export default Navbar;