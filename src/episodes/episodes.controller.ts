import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { EpisodesService } from './episodes.service';

@Controller('episodes')
export class EpisodesController {
    constructor(private episodeServices: EpisodesService) {}

    @Get()
    findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
        return this.episodeServices.findAll(sort)
    }
    @Get('featured')
    findFeatured() {
        return this.episodeServices.findFeatured();
    }

    @Get(':id')
    findOne(@Param() id: string) {
        console.log(id)
        return this.episodeServices.findOne(id)
    }

    @Post()
    create(@Body() input: any) {
        console.log(input)
        return this.episodeServices.create(input);
    }
}
