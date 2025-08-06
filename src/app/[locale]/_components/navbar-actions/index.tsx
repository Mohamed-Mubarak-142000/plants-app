import { SearchIcon, ShoppingCart, User2Icon } from "lucide-react";
import React from "react";
import Link from "../link";
import { AUTH } from "../conistant/enum";
import { CartDrawer } from "../drawer";

const NavbarActions = () => {
  return (
    <div className="flex items-center gap-6">
      <Link href={AUTH.LOGIN}>
        <SearchIcon className="cursor-pointer text-white" />
      </Link>

      <Link href={AUTH.LOGIN}>
        <User2Icon className="cursor-pointer text-white" />
      </Link>

      <CartDrawer
        button={<ShoppingCart className="cursor-pointer text-white" />}
      />
    </div>
  );
};

export default NavbarActions;
