# database

Prisma 기반으로 정의한 DB 스키마 패키지입니다.

PlanetScale DB와 연동되어있습니다.

## 사용법

### 앱에서의 DB 사용

1.  package.json에 의존성 추가

    ```json
    {
        "dependencies": {
            "database": "workspace:*"
        }
    }
    ```

2.  이 패키지를 아래와 같이 import하여 사용

    ```typescript
    import { env } from './env'
    import { PrismaClient } from 'database'

    const prismaGlobal = global as typeof global & {
        prisma?: PrismaClient
    }

    export const prisma: PrismaClient =
        prismaGlobal.prisma ||
        new PrismaClient({
            log:
                env.NODE_ENV === 'development'
                    ? ['query', 'error', 'warn']
                    : ['error'],
        })

    if (env.NODE_ENV !== 'production') {
        prismaGlobal.prisma = prisma
    }
    ```

### schema 확인

1.  Run `prisma generate`.

    ```bash
    pnpm generate
    ```

2.  Check the contents of the `./prisma/dbml/schema.dbml` file at [dbdiagram] (https://dbdiagram.io/)).

### DB 스키마 동기화

1.  Initialize the database.

    ```bash
    pnpm db-push
    ```

## PlanetScale 연동으로 인한 주의사항

-   DB 스키마 내 외래키 미지원
-   git 브랜치와 유사한 스키마 관리
