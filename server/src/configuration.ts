
export const configuration = () => ({
    //database
    database: {
        type: process.env.dialect,
        host: process.env.POSTGRES_HOST,
        port: parseInt(process.env.POSTGRES_PORT, 10),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        autoLoadEntities: true,
        synchronize: false,
        migrationsRun: true,
        logging: false,
        entities: [
            'dist/**/*.entity{.ts,.js}'
        ],
        migrations: [
            'dist/migrations/*{.ts,.js}'
        ]
    }
});