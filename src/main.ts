import { NestFactory } from "@nestjs/core"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { AppModule } from "./app.module"
import { ValidationPipe } from "./pipes/validation.pipe"


async function start() {
  const PORT = process.env.PORT || 5000
  const app = await NestFactory.create(AppModule)
  const config = new DocumentBuilder()
    .setTitle('Nest BackEnd course')
    .setDescription('Rest API documentation')
    .setVersion('ver 1.0')
    .addTag('Nest Api from Ulbi')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api/docs', app, document)
  app.useGlobalPipes(new ValidationPipe())

  await app.listen(PORT, () => console.log(`server start on port ${PORT}`))
}

start()