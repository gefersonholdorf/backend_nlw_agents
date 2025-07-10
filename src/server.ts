// biome-ignore assist/source/organizeImports: T
import { fastify } from 'fastify';
import { fastifyCors } from '@fastify/cors';
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod';
import { env } from './env.ts';
import { getRoomsRoute } from './http/routes/get-rooms.ts';
import { createRoomRoute } from './http/routes/create-room.ts';
import { getRoomQuestionsRoute } from './http/routes/get-room-questions.ts';
import { createQuestionRoute } from './http/routes/create-question.ts';
import { uploadAudioRoute } from './http/routes/upload-audio.ts';
import fastifyMultipart from '@fastify/multipart';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: 'http://127.0.0.1:5173',
});

app.register(fastifyMultipart);

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get('/health', () => {
  return 'UP';
});

app.register(getRoomsRoute);
app.register(createRoomRoute);
app.register(getRoomQuestionsRoute);
app.register(createQuestionRoute);
app.register(uploadAudioRoute);

app.listen({ port: env.PORT });
