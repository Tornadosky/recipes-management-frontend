import Navbar from "./Navbar";

import React from "react";

export default {
  title: "Components/Navbar",
  component: Navbar,
  argTypes: {
    isSignedUp: {
      description:
        "Property is used to check if user is signed in and enables/disables the display of sign in button",
      table: { defaultValue: { summary: false } },
    },
  },
};

export const NavbarDefault = (args) => {
  return <Navbar {...args} />;
};
NavbarDefault.args = {
  isSignedUp: true,
  title: "Logo",
};
