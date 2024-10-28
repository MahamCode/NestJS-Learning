import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';

@Controller('episodes')
export class EpisodesController {

    @Get()
    findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
        return 'all episodes'
    }
    @Get('featured')
    findFeatured() {
        return 'featured episodes';
    }

    @Get(':id')
    findOne(@Param() id: string) {
        console.log(id)
        return 'episode one'
    }

    @Post()
    create(@Body() input: any) {
        console.log(input)
        return 'new episode'
    }
}
