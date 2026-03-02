import http from 'http'
import url from 'url'

// Начальные данные
let items = [
  { id: 1, title: 'title1', description: 'description 1' },
  { id: 2, title: 'title2', description: 'description 2' },
  { id: 3, title: 'title3', description: 'description 3' },
  { id: 4, title: 'title4', description: 'description 4' },
]

// Вспомогательная функция для получения тела запроса
const getRequestBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = ''
    req.on('data', (chunk) => {
      body += chunk.toString()
    })
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {})
      } catch (error) {
        reject(error)
      }
    })
  })
}

// Функция для отправки JSON ответа
const sendJSON = (res, statusCode, data) => {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(data))
}

// Функция для пагинации и сортировки
const paginateAndSort = (items, queryParams) => {
  const result = [...items]

  // Деструктуризация параметров с значениями по умолчанию
  const { sortBy = 'id', sortOrder = 'asc', page = 1, limit = 10 } = queryParams

  // Сортировка
  result.sort((a, b) => {
    const order = sortOrder === 'asc' ? 1 : -1
    if (a[sortBy] < b[sortBy]) return -1 * order
    if (a[sortBy] > b[sortBy]) return 1 * order
    return 0
  })

  // Пагинация с преобразованием в числа
  const currentPage = parseInt(page)
  const itemsPerPage = parseInt(limit)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = currentPage * itemsPerPage

  const paginatedItems = result.slice(startIndex, endIndex)

  return {
    data: paginatedItems,
    pagination: {
      page: currentPage,
      limit: itemsPerPage,
      total: items.length,
      totalPages: Math.ceil(items.length / itemsPerPage),
    },
  }
}

// Создаем HTTP сервер
const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true)
  const { pathname, query } = parsedUrl
  const { method } = req

  // CORS заголовки для разработки
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  // Обработка preflight запросов
  if (method === 'OPTIONS') {
    res.writeHead(204, headers)
    res.end()
    return
  }

  try {
    // GET: Получение списка с пагинацией и сортировкой
    if (pathname === '/items' && method === 'GET') {
      const result = paginateAndSort(items, query)
      res.writeHead(200, { ...headers, 'Content-Type': 'application/json' })
      res.end(JSON.stringify(result))
    }

    // POST: Добавление новой записи
    else if (pathname === '/items' && method === 'POST') {
      const body = await getRequestBody(req)

      if (!body.title?.trim() || !body.description?.trim()) {
        res.writeHead(400, { ...headers, 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: 'Title and description are required' }))
        return
      }

      const newItem = {
        id: items.length > 0 ? Math.max(...items.map((i) => i.id)) + 1 : 1,
        title: body.title.trim(),
        description: body.description.trim(),
      }

      items = [...items, newItem]

      res.writeHead(201, { ...headers, 'Content-Type': 'application/json' })
      res.end(JSON.stringify(newItem))
    }

    // PUT: Редактирование записи по ID
    else if (pathname.match(/^\/items\/\d+$/) && method === 'PUT') {
      const id = parseInt(pathname.split('/')[2])
      const itemIndex = items.findIndex((i) => i.id === id)

      if (itemIndex === -1) {
        res.writeHead(404, { ...headers, 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: 'Item not found' }))
        return
      }

      const body = await getRequestBody(req)

      // Создаем обновленный элемент с использованием spread оператора
      const updatedItem = {
        ...items[itemIndex],
        ...(body.title && { title: body.title.trim() }),
        ...(body.description && { description: body.description.trim() }),
      }

      // Обновляем массив иммутабельно
      items = [...items.slice(0, itemIndex), updatedItem, ...items.slice(itemIndex + 1)]

      res.writeHead(200, { ...headers, 'Content-Type': 'application/json' })
      res.end(JSON.stringify(updatedItem))
    }

    // DELETE: Удаление записи по ID
    else if (pathname.match(/^\/items\/\d+$/) && method === 'DELETE') {
      const id = parseInt(pathname.split('/')[2])
      const itemExists = items.some((i) => i.id === id)

      if (!itemExists) {
        res.writeHead(404, { ...headers, 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: 'Item not found' }))
        return
      }

      // Фильтруем массив иммутабельно
      items = items.filter((i) => i.id !== id)

      res.writeHead(200, { ...headers, 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ message: 'Item deleted successfully' }))
    }

    // 404: Не найденный маршрут
    else {
      res.writeHead(404, { ...headers, 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ error: 'Route not found' }))
    }
  } catch (error) {
    console.error('Error:', error)
    res.writeHead(500, { ...headers, 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ error: 'Internal server error' }))
  }
})

const PORT = 5000

server.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`)
})
