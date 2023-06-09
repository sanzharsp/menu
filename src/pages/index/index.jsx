import MenuTree from '../../components/MenuTree/MenuTree'
import MenuTree2 from '../../components/MenuFull/MenuFull'
import { Card } from 'antd';
function Index({data}) {


  return (
    <div>
           <div style={{padding:10}}>
         <Card
    title="Вариант 1 "
    bordered={false}
    style={{
        width: '100%',
    }}
  >
    <MenuTree data ={data}/>
   
    </Card>
    </div>
    <div style={{padding:10}}>
    <Card
    title="Вариант 2 "
    bordered={false}
    style={{
      width: '100%',
    }}
  >
    <MenuTree2 data ={data} orientation="horizontal" />
 
    </Card>
    </div>
    


    <div style={{padding:10}}>
    <Card
    title="Тех задние "
    bordered={false}
    style={{
      width: '100%',
    }}
  >
   <strong>Задание: </strong><br/>

Разработать компонент React для генерации меню по двухуровневому дереву, описанному в формате JSON с четырьмя полями: порядковый номер, порядковый номер родителя, лейбл ссылки и гиперссылка.<br/>

<strong>Требования</strong>:<br/>

1. Данные для меню должны быть представлены в формате JSON и иметь два уровня вложенности. Каждый узел дерева должен иметь четыре поля: порядковый номер, порядковый номер родителя, Лейбл ссылки и гиперссылка.<br/>
2. Компонент должен рекурсивно генерировать HTML-код для каждого узла дерева, используя данные из JSON.<br/>
3. Подуровни узлов дерева должны открываться при наведении на соответствующий элемент меню.<br/>
4. Раскрытый подуровень должен автоматически скрываться при уходе фокуса с родительского элемента либо с самого подуровня.<br/>
5. Компонент должен иметь настраиваемый стиль CSS для элементов меню.<br/>

Дополнительные требования<br/>
6. Должна быть возможность переключения компонента в вертикальную либо горизонтальную организацию меню.<br/>
7. Должна быть возможность изменения порядка отображения элементов меню перетаскиванием.<br/>

<strong>Данные treeData вы можете найти по адресу в каталоге src/data.jsx</strong>



 
    </Card>
    </div>
  
</div>


);
}

export default Index;
