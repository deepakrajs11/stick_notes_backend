/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
const NotesController = () => import('#controllers/NotesController')
import router from '@adonisjs/core/services/router'
router.post('/', [NotesController, 'store'])
router.get('/', [NotesController, 'show'])
router.delete('/', [NotesController, 'remove'])
