import {Controller, Next, Post, Res, UploadedFile, UseInterceptors, Logger} from '@nestjs/common';
import {FileInterceptor} from "@nestjs/platform-express";
import {Response} from 'express';
import {IFileController} from "./interfaces/file-controller.interface";
import {FileService} from "./file.service";

@Controller('files')
export class FileController implements IFileController {

    constructor(private readonly fileService: FileService) {
    }

    stream() {
        return 'foo';
    }

    @Post()
    @UseInterceptors(
        FileInterceptor('file'),
    )
    async upload(@UploadedFile() file, @Next() next, @Res() res: Response) {

        const bucket = this.fileService.getBucket();

        const blob = bucket.file(file.originalname);
        const blobStream = blob.createWriteStream({
            metadata: {
                contentType: file.mimetype
            }
        });
        blobStream.on("error", err => {
            Logger.error(err);
            next(err);
        });
        blobStream.on("finish", () => {
            res.status(200).send('Ok');
        });

        blobStream.end(file.buffer);
    }
}
