import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Card from "../components/Card";

storiesOf("Card", module).add("base", () => <Card />);
