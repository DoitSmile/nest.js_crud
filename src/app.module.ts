// app.module.ts

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './apis/products/entites/product.entity';
import { ProductsModule } from './apis/products/products.module';
import { ProductSaleslocation } from './apis/productSaleslocation/entities/productSaleslocation.entity';

@Module({
  imports: [
    ProductsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql', // 데이터 베이스 타입
      host: 'localhost', // local 환경으로 진행
      port: 3306, // mysql은 기본 port는 3306
      username: 'root', // mysql은 기본 user는 root로 지정
      password: '12345678', // 본인의 mysql password
      database: 'mysqlpractice', // 연결할 데이터 베이스명
      entities: [Product, ProductSaleslocation], // 데이터 베이스와 연결할 entity
      synchronize: true, // entity 테이블을 데이터베이스와 동기화할 것인지
      logging: true, // 콘솔 창에 log를 표시할 것인지
    }),
  ],
})
export class AppModule {}
