export default function MenuNavbar() {
  return (
    <>
      <nav className="w-full pl-4 border">
        <ul className="flex flex-row justify-between items-end pt-6 pb-2 text-gray-400">
          <li className="">
            <a>Food</a>
          </li>
          <li className="">
            <a>Alcohol</a>
          </li>
          <li className="">
            <a>Soft drinks</a>
          </li>
          <li className="">
            <a>Other</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
