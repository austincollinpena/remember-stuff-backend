schema.prisma is the auto generate file

1. prisma migrate save --experimental
2. prisma migrate up --experimental
3. npx prisma introspect - Generate the correctly formatted schema.prisma file
4. npx prisma generate - Update the client
5. View progress in npx prisma studio --experimental