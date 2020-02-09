import { Controller, Post,Get } from '@nestjs/common';

@Controller('cats')

export class CatsController {
   
    @Get()
    tryme():string{
        return "xyz";
    }
}
