import { reset, seed } from 'drizzle-seed';
import { client, db } from './connection.ts';
import { schema } from './schemas/index.ts';

await reset(db, schema);

console.log('RESET')

await seed(db, schema).refine((f) => {
  return {
    rooms: {
      count: 20,
      columns: {
        name: f.companyName(),
        description: f.loremIpsum(),
      },
    },
    questions: {
      count: 20
    }
  };
});

await client.end();

// biome-ignore lint/suspicious/noConsole: Apenas dev
console.log('Database seeded');
