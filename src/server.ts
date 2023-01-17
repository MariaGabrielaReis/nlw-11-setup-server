import Fastify from 'fastify';

const app = Fastify();

app.get('/', () => {
  return 'Hello';
});

app.listen({ port: 3333 }).then(() => console.log('Server is running'));
