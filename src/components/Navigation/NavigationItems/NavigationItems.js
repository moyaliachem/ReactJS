import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import { Icon, Badge, Menu, Dropdown, Avatar } from "antd";
import "antd/dist/antd.css";

const menu = (
  <Menu>
    <Menu.Item key="0">
      <NavigationItem link="/logout">Logout</NavigationItem>
    </Menu.Item>
  </Menu>
);

const navigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      Burger Builder
    </NavigationItem>
    {props.isAuthenticated ? (
      <Badge dot>
        <NavigationItem link="/orders">Orders</NavigationItem>
      </Badge>
    ) : null}
    {!props.isAuthenticated ? (
      <NavigationItem link="/auth">
        <Icon type="lock" style={{ fontSize: "20px" }} />
      </NavigationItem>
    ) : (
      <Dropdown overlay={menu}>
        <a>
          <NavigationItem link>
            <Avatar
              shape="square"
              style={{ backgroundColor: "#8f5c2c", fontSize: "10px" }}
            >
              <Icon type="user" />
            </Avatar>
          </NavigationItem>
        </a>
      </Dropdown>
    )}
  </ul>
);

export default navigationItems;
