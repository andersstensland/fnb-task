export default function MenuNavbar() {
  return (
    <nav className="w-full p-4 border-b">
      <ul className="flex justify-between items-end text-gray-400">
        <li className="font-bold text-black border-b-2 border-orange-500 pb-2">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Food
          </a>
        </li>
        <li className="hover:text-black">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Alcohol
          </a>
        </li>
        <li className="hover:text-black">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Soft drinks
          </a>
        </li>
        <li className="hover:text-black">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Other
          </a>
        </li>
      </ul>
    </nav>
  );
}
