import { Request, Response } from 'express'
import knex from '../database/connection'

class ItemsController {
    async index(request: Request, response: Response) {
        const items = await knex('items').select('*')
    
        const serealizedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://localhost:3333/uploads/${item.image}`
            }
        })
    
        return response.json(serealizedItems)
    }
}

export default ItemsController

// formato comunidade:
// index (listar), show (mostrar um item), create, update, delete
// vale para toda class criada