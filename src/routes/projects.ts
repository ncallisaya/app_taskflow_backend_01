import { Router } from 'express'; 
import { projectsController } from '../controllers/projects.controller'; 
  
const router = Router(); 

/**
 * @openapi
 * /api/projects:
 *   get:
 *     tags:
 *       - Proyectos
 *     summary: Lista todos los proyectos
 *     responses:
 *       200:
 *         description: Lista de proyectos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ProjectPublic'
 *                 count:
 *                   type: integer
 */
router.get('/',       projectsController.getAll);

/**
 * @openapi
 * /api/projects/{id}:
 *   get:
 *     tags:
 *       - Proyectos
 *     summary: Obtiene un proyecto por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del proyecto
 *     responses:
 *       200:
 *         description: Datos del proyecto
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/ProjectPublic'
 *       404:
 *         description: Proyecto no encontrado
 */
router.get('/:id',    projectsController.getById);

/**
 * @openapi
 * /api/projects:
 *   post:
 *     tags:
 *       - Proyectos
 *     summary: Crea un nuevo proyecto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateProjectDto'
 *     responses:
 *       201:
 *         description: Proyecto creado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/ProjectPublic'
 *       400:
 *         description: Campos requeridos faltantes
 */
router.post('/',      projectsController.create);

/**
 * @openapi
 * /api/projects/{id}:
 *   put:
 *     tags:
 *       - Proyectos
 *     summary: Actualiza un proyecto
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del proyecto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateProjectDto'
 *     responses:
 *       200:
 *         description: Proyecto actualizado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/ProjectPublic'
 *       404:
 *         description: Proyecto no encontrado
 */
router.put('/:id',    projectsController.update);

/**
 * @openapi
 * /api/projects/{id}:
 *   delete:
 *     tags:
 *       - Proyectos
 *     summary: Elimina un proyecto
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del proyecto
 *     responses:
 *       204:
 *         description: Proyecto eliminado (sin contenido)
 *       404:
 *         description: Proyecto no encontrado
 */
router.delete('/:id', projectsController.remove);
  
export default router; 