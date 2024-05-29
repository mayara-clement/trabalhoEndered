import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { FiMail } from "react-icons/fi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import Link from "next/link";
import { useContext } from "react";
import { SidebarContext } from "@/context/SidebarContext";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

const sidebarItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: AiOutlineHome
  },
  {
    name: "Usuário",
    href: "/usuario",
    icon: BsPeople
  },
  {
    name: "Novo cliente",
    href: "/novoCliente",
    icon: FiMail
  },
  {
    name: "Listagem",
    href: "/listagem",
    icon: TiContacts
  }
];

const Sidebar = () => {
  const router = useRouter();
  const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  return (
    <div className="sidebar__wrapper">
      <button className="btn" onClick={toggleSidebarcollapse}>
        {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
      </button>
      <aside className="sidebar flex flex-col" data-collapse={isCollapsed}>
        <div className="sidebar__top">
          <Image
            width={80}
            height={80}
            className="sidebar__logo"
            src="/logo.svg"
            alt="logo"
          />
        </div>
        <ul className="sidebar__list flex-grow">
          {sidebarItems.map(({ name, href, icon: Icon }) => {
            return (
              <li className="sidebar__item" key={name}>
                <Link
                  className={`sidebar__link ${
                    router.pathname === href ? "sidebar__link--active" : ""
                  }`}
                  href={href}>
                  <span className="sidebar__icon">
                    <Icon />
                  </span>
                  <span className="sidebar__name">{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          className="sidebar__link text-red-600 flex items-center w-fit"
          onClick={handleLogout}>
          <span className="sidebar__icon text-red-600">
            <FiLogOut />
          </span>
          <span className="sidebar__name text-red-600">Sair</span>
        </button>
      </aside>
    </div>
  );
};

export default Sidebar;
