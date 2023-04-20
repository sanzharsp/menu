const treeData = [
    { "id": 1, "parentId": null, "label": "Главная", "url": "/" },
    { "id": 2, "parentId": null, "label": "Каталог", "url": "/catalog" },
    { "id": 3, "parentId": 2, "label": "Книги", "url": "/catalog/books" },
    { "id": 4, "parentId": 2, "label": "Музыка", "url": "/catalog/music" },
    { "id": 5, "parentId": 3, "label": "Фантастика", "url": "/catalog/books/science-fiction" },
    { "id": 6, "parentId": 3, "label": "Детективы", "url": "/catalog/books/detectives" },
    { "id": 7, "parentId": 4, "label": "Рок", "url": "/catalog/music/rock" },
    { "id": 8, "parentId": 4, "label": "Джаз", "url": "/catalog/music/jazz" }
  ]

  
  export default treeData;