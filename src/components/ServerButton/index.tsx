import React from "react";
import { Button } from "./styles";
import Logo from "../../assets/Logo.svg";

export interface ServerButtonProps {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<ServerButtonProps> = ({
  isHome,
  selected,
  hasNotifications,
  mentions,
}) => (
  <Button
    isHome={isHome}
    hasNotifications={hasNotifications}
    mentions={mentions}
    className={selected ? "active" : ""}
  >
    {isHome && <img src={Logo} alt="Rocketseat" />}
  </Button>
);

export default ServerButton;
