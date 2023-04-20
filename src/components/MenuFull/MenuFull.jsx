import React, { useState } from 'react';
import { Button, Menu } from 'antd';

const { SubMenu } = Menu;

function MenuTree2({ data }) {
  const [openKeys, setOpenKeys] = useState([]);
  const [position, setPosition] = useState('horizontal');

  const positionRef = ()=>{
    position === 'horizontal'
    ?
    setPosition('vertical')
    :
    setPosition('horizontal')
  }

  const handleOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  const renderSubMenu = (parentId) => {
    const subMenuData = data.filter((item) => item.parentId === parentId);
    if (subMenuData.length === 0) {
      return null;
    }
    return subMenuData.map((item) => {
      const hasSubMenu = data.some((i) => i.parentId === item.id);
      if (hasSubMenu) {
        return (
          <SubMenu key={item.id} title={item.label}>
            {renderSubMenu(item.id)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={item.id}>
          <a href={item.url}>{item.label}</a>
        </Menu.Item>
      );
    });
  };

  return (
    <>
    <Menu
      mode={position}
      openKeys={openKeys}
      onOpenChange={handleOpenChange}
      style={{ width: 256 }}
    >
      {renderSubMenu(null)}
    </Menu>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Button onClick={()=>positionRef()}>Поменять позицию</Button>
    </div>
    
    </>
  );
}

export default MenuTree2;