import Link from "next/link";

interface NavProps {
  navItems: any[];
}

const Nav = ({ navItems }: NavProps) => {
  return (
    <div className="flex gap-10 w-full justify-center">
      {navItems?.map((item, i) => (
        <Link
          className=" font-medium text-xl text-[#282B36] uppercase"
          key={i}
          href={item.href}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Nav;
