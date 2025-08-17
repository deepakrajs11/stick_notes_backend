import Note from '#models/note'
import { HttpContext } from '@adonisjs/core/http'
export default class NotesController {
  async store({ request }: HttpContext) {
    const data = request.only(['title', 'body'])
    const note = await Note.create(data)
    return note
  }

  async show({ response }: HttpContext) {
    const data = await Note.query().select(['title', 'body'])
    return response.json({ posts: data })
  }
  public async remove({ request, response }: HttpContext) {
    const { title, body } = request.only(['title', 'body'])
    const note = await Note.query().where('title', title).where('body', body).first()
    if (!note) {
      return response.status(404).json({ error: 'Note not found' })
    }

    await note.delete()
    return response.json({ message: 'Note deleted successfully' })
  }
}
