import React, { useState } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const MenuTree = ({ data }) => {
  const [openKeys, setOpenKeys] = useState([]);

  const handleClick = e => {
    setOpenKeys([e.key]);
  };

  const handleOpenChange = keys => {
    setOpenKeys(keys);
  };

  const renderMenu = (menuData, parentKey = '') => {
    return (
      <Menu.SubMenu key={`${parentKey}${menuData.id}`} title={menuData.label}>
        {data
          .filter(item => item.parentId === menuData.id)
          .map(subMenuData => {
            if (data.filter(item => item.parentId === subMenuData.id).length > 0) {
              return renderMenu(subMenuData, `${parentKey}${menuData.id}-`);
            }
            return (
              <Menu.Item key={`${parentKey}${menuData.id}-${subMenuData.id}`}>
                <a href={subMenuData.url}>{subMenuData.label}</a>
              </Menu.Item>
            );
          })}
      </Menu.SubMenu>
    );
  };

  return (
    <Dropdown
      trigger={['click']}
      style = {{'width': '100%',}}
      overlay={
        <Menu
          onClick={handleClick}
          onOpenChange={handleOpenChange}
          openKeys={openKeys}
          mode="horizontal"
        >
          {data.filter(item => item.parentId === null).map(menuData => renderMenu(menuData))}
        </Menu>
      }
    >
      <Button>
        Меню <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default MenuTree;