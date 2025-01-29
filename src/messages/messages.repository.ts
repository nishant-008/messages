import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";

@Injectable()
export class MessagesRepository {
    async findOne(id:string) {
        const constents = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(constents);

        return messages[id];
    }

    async findAll() {
        const constents = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(constents);

        return messages;
    }
    
    async create(content:string) {
        const constents = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(constents);

        const id = Math.floor(Math.random() * 999);

        messages[id] = {id, content};

        await writeFile( 'messages.json', JSON.stringify(messages));
    }
}