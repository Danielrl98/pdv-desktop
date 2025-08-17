// sdk.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { INestApplicationContext } from '@nestjs/common';

let appContext: INestApplicationContext;

export async function initSDK() {
  if (!appContext) {
    appContext = await NestFactory.createApplicationContext(AppModule);
  }
  return appContext;
}

export async function getSDKService<T>(
  type: new (...args: any[]) => T,
): Promise<T> {
  const ctx = await initSDK();
  return ctx.get<T>(type);
}