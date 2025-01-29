import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    
        constructor(public messagesService: MessagesService) {}
    @Get()
    listMessages(){
        return this.messagesService.findAll();
    }

    @Post()
    createMessage(@Body() body: createMessageDto){
        this.messagesService.create(body.content);
        return 'Message created successfully!';
    }
    
    @Get('/:id')
    async getMessage(@Param('id') id: string){ 
        const message = await this.messagesService.findOne(id);

        if (!message) {
            throw new NotFoundException(`Message with id ${id} not found.`);
        }
    }
}
