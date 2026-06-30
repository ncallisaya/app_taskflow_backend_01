import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'TaskFlow API',
      version: '1.0.0',
      description: 'API de gestión de tareas con Express + TypeScript + PostgreSQL',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 3000}`,
        description: 'Servidor de desarrollo',
      },
    ],
    components: {
      schemas: {
        UserPublic: {
          type: 'object',
          properties: {
            id: { type: 'string', description: 'ID del usuario' },
            name: { type: 'string', description: 'Nombre del usuario' },
            email: { type: 'string', format: 'email', description: 'Correo electrónico' },
            createdAt: { type: 'string', format: 'date-time', description: 'Fecha de creación' },
            updatedAt: { type: 'string', format: 'date-time', description: 'Fecha de actualización' },
          },
        },
        CreateUserDto: {
          type: 'object',
          required: ['name', 'email', 'password'],
          properties: {
            name: { type: 'string', description: 'Nombre del usuario' },
            email: { type: 'string', format: 'email', description: 'Correo electrónico' },
            password: { type: 'string', format: 'password', description: 'Contraseña' },
          },
        },
        UpdateUserDto: {
          type: 'object',
          properties: {
            name: { type: 'string', description: 'Nombre del usuario' },
            email: { type: 'string', format: 'email', description: 'Correo electrónico' },
          },
        },
        ProjectPublic: {
          type: 'object',
          properties: {
            id: { type: 'string', description: 'ID del proyecto' },
            name: { type: 'string', description: 'Nombre del proyecto' },
            description: { type: 'string', description: 'Descripción del proyecto' },
            ownerId: { type: 'string', description: 'ID del propietario' },
            createdAt: { type: 'string', format: 'date-time', description: 'Fecha de creación' },
            updatedAt: { type: 'string', format: 'date-time', description: 'Fecha de actualización' },
          },
        },
        CreateProjectDto: {
          type: 'object',
          required: ['name', 'description', 'ownerId'],
          properties: {
            name: { type: 'string', description: 'Nombre del proyecto' },
            description: { type: 'string', description: 'Descripción del proyecto' },
            ownerId: { type: 'string', description: 'ID del propietario' },
          },
        },
        UpdateProjectDto: {
          type: 'object',
          properties: {
            name: { type: 'string', description: 'Nombre del proyecto' },
            description: { type: 'string', description: 'Descripción del proyecto' },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
